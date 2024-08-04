import { SortOrder } from "../../util/SortOrder";

export type TestimonialsOrderByInput = {
  clientName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  testimonialText?: SortOrder;
  updatedAt?: SortOrder;
  videoUrl?: SortOrder;
};
