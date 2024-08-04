import { SortOrder } from "../../util/SortOrder";

export type ProjectsOrderByInput = {
  clientType?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  keyFeatures?: SortOrder;
  results?: SortOrder;
  screenshots?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
