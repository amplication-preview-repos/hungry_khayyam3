import { BlogPosts as TBlogPosts } from "../api/blogPosts/BlogPosts";

export const BLOGPOSTS_TITLE_FIELD = "title";

export const BlogPostsTitle = (record: TBlogPosts): string => {
  return record.title?.toString() || String(record.id);
};
