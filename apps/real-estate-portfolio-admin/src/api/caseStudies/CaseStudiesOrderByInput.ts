import { SortOrder } from "../../util/SortOrder";

export type CaseStudiesOrderByInput = {
  challenges?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  outcomes?: SortOrder;
  projectId?: SortOrder;
  solutions?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
