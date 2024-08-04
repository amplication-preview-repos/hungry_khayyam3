import { SortOrder } from "../../util/SortOrder";

export type ServicesOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  serviceName?: SortOrder;
  updatedAt?: SortOrder;
};
