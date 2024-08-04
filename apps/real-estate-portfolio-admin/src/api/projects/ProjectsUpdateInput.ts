import { CaseStudiesUpdateManyWithoutProjectsItemsInput } from "./CaseStudiesUpdateManyWithoutProjectsItemsInput";
import { InputJsonValue } from "../../types";

export type ProjectsUpdateInput = {
  caseStudiesItems?: CaseStudiesUpdateManyWithoutProjectsItemsInput;
  clientType?: "Option1" | null;
  description?: string | null;
  keyFeatures?: string | null;
  results?: string | null;
  screenshots?: InputJsonValue;
  title?: string | null;
};
