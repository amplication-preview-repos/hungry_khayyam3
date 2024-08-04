import { CaseStudiesListRelationFilter } from "../caseStudies/CaseStudiesListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ProjectsWhereInput = {
  caseStudiesItems?: CaseStudiesListRelationFilter;
  clientType?: "Option1";
  description?: StringNullableFilter;
  id?: StringFilter;
  keyFeatures?: StringNullableFilter;
  results?: StringNullableFilter;
  screenshots?: JsonFilter;
  title?: StringNullableFilter;
};
