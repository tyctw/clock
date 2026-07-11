import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

const FORBIDDEN_WORDS = [
  '幹', '靠北', '白痴', '智障', '死', '去死', '廢物', '垃圾', '操', '媽的', '賤', '王八', '婊', '妓', '屌', '雞掰', '笨蛋', '智障', '白爛'
];

function checkContentSafety(message: string): boolean {
  for (const word of FORBIDDEN_WORDS) {
    if (message.includes(word)) {
      return false;
    }
  }
  return true;
}

async function startServer() {
  const app = express();
  const PORT = 3000;
  
  // Enable trust proxy to get the real IP address of the client
  app.set('trust proxy', true);
  app.use(express.json());

  // API to post a cheer
  app.post("/api/cheers", async (req, res) => {
    try {
      const { message } = req.body;

      if (!message || typeof message !== "string" || message.trim().length === 0) {
        return res.status(400).json({ error: "Message is required" });
      }

      const truncatedMessage = message.trim().substring(0, 100); // limit length
      const isSafe = checkContentSafety(truncatedMessage);

      if (!isSafe) {
        return res.status(400).json({ error: "留言包含不適當內容，請修改後再送出。" });
      }
      
      if (!supabaseUrl || !supabaseKey) {
          return res.status(500).json({ error: "Supabase credentials are not configured in .env" });
      }

      // Capture IP and User-Agent
      const ipAddress = req.ip || req.headers['x-forwarded-for'] || 'unknown';
      const userAgent = req.headers['user-agent'] || 'unknown';

      const { data, error } = await supabase
        .from('cheers')
        .insert([
          { 
            message: truncatedMessage,
            ip_address: ipAddress,
            user_agent: userAgent
          }
        ])
        .select()
        .single();

      if (error) throw error;
      
      // Supabase returns created_at natively if we selected it, otherwise we adapt it for the frontend
      // Front-end expects id, message, createdAt
      res.status(201).json({
         id: data.id,
         message: data.message,
         createdAt: data.created_at
      });

    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: "Failed to create cheer: " + (err.message || String(err)) });
    }
  });

  // API to get latest cheers
  app.get("/api/cheers", async (req, res) => {
    try {
      if (!supabaseUrl || !supabaseKey) {
         return res.json([]); // return empty gracefully if not configured yet
      }
      
      const { data, error } = await supabase
        .from('cheers')
        .select('id, message, created_at')
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) throw error;
      
      // Transform created_at to createdAt for frontend
      const transformedData = data.map(item => ({
        id: item.id,
        message: item.message,
        createdAt: item.created_at
      }));
      
      res.json(transformedData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch cheers" });
    }
  });

  app.get("/api/cheers/stats", async (req, res) => {
    try {
      if (!supabaseUrl || !supabaseKey) {
         return res.json({ total: 0, today: 0 }); 
      }
        
      // Get total count
      const { count: totalCount, error: totalError } = await supabase
        .from('cheers')
        .select('*', { count: 'exact', head: true });

      if (totalError) throw totalError;

      // Get today count
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const { count: todayCount, error: todayError } = await supabase
        .from('cheers')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', today.toISOString());

      if (todayError) throw todayError;

      res.json({ total: totalCount || 0, today: todayCount || 0 });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch stats" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
