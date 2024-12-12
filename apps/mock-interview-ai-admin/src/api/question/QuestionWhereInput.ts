import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type QuestionWhereInput = {
  content?: StringNullableFilter;
  difficulty?: "Option1";
  id?: StringFilter;
};
