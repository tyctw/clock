import { GoogleGenAI } from "@google/genai";
import { MOTIVATION_PROMPT } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const fetchMotivation = async (): Promise<string> => {
  if (!apiKey) {
    return "請設定 API Key 以獲取 AI 建議。";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: MOTIVATION_PROMPT,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "加油！今天的努力是為了明天的成就。";
  } catch (error) {
    console.error("Error fetching motivation:", error);
    return "保持專注，你一定做得到！";
  }
};