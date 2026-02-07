import { ScheduleItem } from './types';

// 116 CAP Date: May 22, 2027
// Exam starts at 08:30 AM with Social Studies
export const TARGET_DATE = new Date('2027-05-22T08:30:00');

export const EXAM_NAME = "116年國中教育會考";
export const EXAM_DATES = "2027/05/22 ~ 05/23";

export const MOTIVATION_PROMPT = `
你是一位溫暖且充滿智慧的學習導師。請為一位正在準備「116年國中教育會考」的台灣國中生，提供一句簡短、有力且具體的學習建議或心靈雞湯。
重點放在：堅持、效率、心態調整或學科準備技巧。
字數限制：50字以內。
語言：繁體中文（台灣用語）。
語氣：正向、鼓勵、不說教。
`;

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  { task: "國中會考報名時間", date: "待簡章公布" },
  { task: "國中會考寄發准考證", date: "待簡章公布" },
  { 
    task: "國中會考日期", 
    date: "116年5月22日 ~ 5月23日", 
    dateObj: TARGET_DATE,
    isHighlight: true 
  },
  { task: "國中會考成績公布時間", date: "待簡章公布" },
  { task: "個人序位區間公告時間", date: "待簡章公布" },
  { task: "就學區免試入學填志願", date: "待簡章公布", note: "（結束依各地區時間為主）" },
  { task: "就學區免試入學放榜時間", date: "待簡章公布", note: "（放榜依各地區時間為主）" },
  { task: "免試入學報到", date: "待簡章公布" },
];