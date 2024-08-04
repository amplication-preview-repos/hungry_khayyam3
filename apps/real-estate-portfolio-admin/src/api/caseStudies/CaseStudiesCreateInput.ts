import { ProjectsWhereUniqueInput } from "../projects/ProjectsWhereUniqueInput";

export type CaseStudiesCreateInput = {
  challenges?: string | null;
  outcomes?: string | null;
  project?: ProjectsWhereUniqueInput | null;
  solutions?: string | null;
  title?: string | null;
};
