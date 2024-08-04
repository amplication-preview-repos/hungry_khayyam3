import { Projects } from "../projects/Projects";

export type CaseStudies = {
  challenges: string | null;
  createdAt: Date;
  id: string;
  outcomes: string | null;
  project?: Projects | null;
  solutions: string | null;
  title: string | null;
  updatedAt: Date;
};
