-- Create cheers table
CREATE TABLE cheers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    message TEXT NOT NULL,
    ip_address TEXT,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Enable RLS (optional, but good practice. Since we access via backend, we can bypass or set rules)
ALTER TABLE cheers ENABLE ROW LEVEL SECURITY;

-- If you use the anon key in your backend (not recommended for backend, but common), 
-- you might want to allow inserts from the backend, or just use the service_role key to bypass RLS.
-- Example policy to allow anyone to read (if you want to fetch directly from frontend later):
CREATE POLICY "Allow public read access" ON cheers FOR SELECT USING (true);

-- Allow public insert access
CREATE POLICY "Allow public insert access" ON cheers FOR INSERT WITH CHECK (true);
