import { ScheduleItem } from './types';
import { ADMISSION_SCHEDULE } from './lib/admissionSchedule';

// 116 CAP Date: May 15, 2027
// Exam starts at 08:30 AM with Social Studies
export const TARGET_DATE = new Date('2027-05-15T08:30:00+08:00');

export const EXAM_NAME = "116年國中教育會考";
export const EXAM_DATES = "2027/05/15 ~ 05/16";

export const MOTIVATION_PROMPT = `
你是一位溫暖且充滿智慧的學習導師。請為一位正在準備「116年國中教育會考」的台灣國中生，提供一句簡短、有力且具體的學習建議或心靈雞湯。
重點放在：堅持、效率、心態調整或學科準備技巧。
字數限制：50字以內。
語言：繁體中文（台灣用語）。
語氣：正向、鼓勵、不說教。
`;

export const SCHEDULE_ITEMS: ScheduleItem[] = ADMISSION_SCHEDULE;
