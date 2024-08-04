import { CaseStudies } from "../caseStudies/CaseStudies";
import { JsonValue } from "type-fest";

export type Projects = {
  caseStudiesItems?: Array<CaseStudies>;
  clientType?: "Option1" | null;
  createdAt: Date;
  description: string | null;
  id: string;
  keyFeatures: string | null;
  results: string | null;
  screenshots: JsonValue;
  title: string | null;
  updatedAt: Date;
};
