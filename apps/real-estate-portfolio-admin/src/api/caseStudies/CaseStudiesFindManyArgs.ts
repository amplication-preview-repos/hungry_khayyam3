import { CaseStudiesWhereInput } from "./CaseStudiesWhereInput";
import { CaseStudiesOrderByInput } from "./CaseStudiesOrderByInput";

export type CaseStudiesFindManyArgs = {
  where?: CaseStudiesWhereInput;
  orderBy?: Array<CaseStudiesOrderByInput>;
  skip?: number;
  take?: number;
};
