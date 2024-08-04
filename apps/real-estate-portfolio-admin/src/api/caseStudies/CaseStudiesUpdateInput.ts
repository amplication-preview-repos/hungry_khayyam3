import { ProjectsWhereUniqueInput } from "../projects/ProjectsWhereUniqueInput";

export type CaseStudiesUpdateInput = {
  challenges?: string | null;
  outcomes?: string | null;
  project?: ProjectsWhereUniqueInput | null;
  solutions?: string | null;
  title?: string | null;
};
