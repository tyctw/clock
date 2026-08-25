import { BookOpen, BrainCircuit, Calculator, Globe2, History, Zap } from 'lucide-react';
import type { ReactNode } from 'react';

type Strategy = { subtitle: string; text: string };

export const studyTipsData: Array<{
  id: string;
  title: string;
  content: string;
  icon: ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  fullStrategy: Strategy[];
}> = [
  { id: 'chinese', title: '國文科', content: '從閱讀理解、文言文到國學常識，建立穩定的答題判斷力。', icon: <BookOpen />, color: 'text-rose-500', bgColor: 'bg-rose-200', borderColor: 'border-rose-200', fullStrategy: [{ subtitle: '每日閱讀，累積語感', text: '每天安排一段閱讀，練習找出文章主旨、人物觀點與關鍵線索。' }, { subtitle: '整理常見題型', text: '把易錯的成語、文言字詞與修辭題記錄下來，考前反覆複習。' }] },
  { id: 'english', title: '英文科', content: '從核心單字、文法到閱讀題型，建立穩定的理解力與答題節奏。', icon: <Globe2 />, color: 'text-blue-500', bgColor: 'bg-blue-200', borderColor: 'border-blue-200', fullStrategy: [{ subtitle: '建立單字複習節奏', text: '依主題整理核心單字，搭配例句與短篇閱讀，加深記憶。' }, { subtitle: '先讀題，再讀文章', text: '閱讀題先掌握題目方向，再回到文章定位資訊，能提升作答效率。' }] },
  { id: 'math', title: '數學科', content: '先掌握觀念與常用解題模型，再透過練習提高速度與正確率。', icon: <Calculator />, color: 'text-amber-500', bgColor: 'bg-amber-200', borderColor: 'border-amber-200', fullStrategy: [{ subtitle: '觀念優先於題量', text: '遇到錯題先釐清使用的公式與觀念，再做同類型題目驗證。' }, { subtitle: '練習完整書寫', text: '保留計算步驟，檢查符號與單位，降低粗心造成的失分。' }] },
  { id: 'science', title: '自然科', content: '用圖表和實驗概念串連知識，訓練跨單元的科學推理能力。', icon: <Zap />, color: 'text-emerald-500', bgColor: 'bg-emerald-200', borderColor: 'border-emerald-200', fullStrategy: [{ subtitle: '用圖像連結概念', text: '將實驗流程、公式與現象畫成簡圖，理解變因之間的關係。' }, { subtitle: '熟悉圖表判讀', text: '練習從座標、趨勢與單位找出資訊，再回推科學概念。' }] },
  { id: 'social', title: '社會科', content: '掌握時間軸、地圖與議題脈絡，讓零碎知識形成完整架構。', icon: <History />, color: 'text-violet-500', bgColor: 'bg-violet-200', borderColor: 'border-violet-200', fullStrategy: [{ subtitle: '建立時間與地理框架', text: '用時間軸整理事件，用地圖整理區域特色，避免只記零碎名詞。' }, { subtitle: '連結時事與概念', text: '看到議題時，練習對應相關制度、地理環境或歷史背景。' }] },
  { id: 'mindset', title: '心態與作息', content: '照顧睡眠、情緒與複習節奏，在考前維持最穩定的狀態。', icon: <BrainCircuit />, color: 'text-teal-500', bgColor: 'bg-teal-200', borderColor: 'border-teal-200', fullStrategy: [{ subtitle: '安排可完成的目標', text: '將複習拆成小單位，每天完成可衡量的任務，減少焦慮感。' }, { subtitle: '保留休息與睡眠', text: '規律作息能維持專注力，遇到壓力時先短暫休息再回到計畫。' }] },
];
