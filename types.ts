export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface MotivationResponse {
  text: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface ScheduleItem {
  task: string;
  date: string;
  dateObj?: Date;
  note?: string;
  isHighlight?: boolean;
}