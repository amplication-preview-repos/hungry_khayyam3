import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectsWhereUniqueInput } from "../projects/ProjectsWhereUniqueInput";

export type CaseStudiesWhereInput = {
  challenges?: StringNullableFilter;
  id?: StringFilter;
  outcomes?: StringNullableFilter;
  project?: ProjectsWhereUniqueInput;
  solutions?: StringNullableFilter;
  title?: StringNullableFilter;
};
