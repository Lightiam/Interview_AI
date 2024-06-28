import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InterviewWhereInput = {
  duration?: IntNullableFilter;
  id?: StringFilter;
  scheduledAt?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
