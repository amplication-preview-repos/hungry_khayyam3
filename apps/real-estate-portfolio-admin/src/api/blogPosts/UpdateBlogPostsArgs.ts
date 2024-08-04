import { BlogPostsWhereUniqueInput } from "./BlogPostsWhereUniqueInput";
import { BlogPostsUpdateInput } from "./BlogPostsUpdateInput";

export type UpdateBlogPostsArgs = {
  where: BlogPostsWhereUniqueInput;
  data: BlogPostsUpdateInput;
};
