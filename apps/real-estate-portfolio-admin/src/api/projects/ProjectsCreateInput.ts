import { CaseStudiesCreateNestedManyWithoutProjectsItemsInput } from "./CaseStudiesCreateNestedManyWithoutProjectsItemsInput";
import { InputJsonValue } from "../../types";

export type ProjectsCreateInput = {
  caseStudiesItems?: CaseStudiesCreateNestedManyWithoutProjectsItemsInput;
  clientType?: "Option1" | null;
  description?: string | null;
  keyFeatures?: string | null;
  results?: string | null;
  screenshots?: InputJsonValue;
  title?: string | null;
};
