import { BlogPostsWhereInput } from "./BlogPostsWhereInput";
import { BlogPostsOrderByInput } from "./BlogPostsOrderByInput";

export type BlogPostsFindManyArgs = {
  where?: BlogPostsWhereInput;
  orderBy?: Array<BlogPostsOrderByInput>;
  skip?: number;
  take?: number;
};
