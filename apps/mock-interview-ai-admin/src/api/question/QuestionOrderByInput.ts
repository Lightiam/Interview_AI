import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  difficulty?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
