import { Interview as TInterview } from "../api/interview/Interview";

export const INTERVIEW_TITLE_FIELD = "title";

export const InterviewTitle = (record: TInterview): string => {
  return record.title?.toString() || String(record.id);
};
