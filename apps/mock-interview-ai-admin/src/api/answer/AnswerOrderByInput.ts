import { SortOrder } from "../../util/SortOrder";

export type AnswerOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  submittedAt?: SortOrder;
  updatedAt?: SortOrder;
};
