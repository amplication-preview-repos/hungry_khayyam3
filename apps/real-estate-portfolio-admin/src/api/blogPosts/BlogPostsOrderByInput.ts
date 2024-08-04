import { SortOrder } from "../../util/SortOrder";

export type BlogPostsOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  publishedDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
