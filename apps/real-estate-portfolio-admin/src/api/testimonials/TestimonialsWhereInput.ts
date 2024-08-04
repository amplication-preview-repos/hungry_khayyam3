import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TestimonialsWhereInput = {
  clientName?: StringNullableFilter;
  id?: StringFilter;
  testimonialText?: StringNullableFilter;
  videoUrl?: StringNullableFilter;
};
