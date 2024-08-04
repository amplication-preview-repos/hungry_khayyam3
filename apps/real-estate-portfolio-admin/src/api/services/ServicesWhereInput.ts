import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ServicesWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  serviceName?: StringNullableFilter;
};
