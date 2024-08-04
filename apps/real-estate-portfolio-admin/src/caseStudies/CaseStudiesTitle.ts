import { CaseStudies as TCaseStudies } from "../api/caseStudies/CaseStudies";

export const CASESTUDIES_TITLE_FIELD = "title";

export const CaseStudiesTitle = (record: TCaseStudies): string => {
  return record.title?.toString() || String(record.id);
};
