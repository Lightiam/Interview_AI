import { SortOrder } from "../../util/SortOrder";

export type InterviewOrderByInput = {
  createdAt?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  scheduledAt?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
