import * as graphql from "@nestjs/graphql";
import { BlogPostsResolverBase } from "./base/blogPosts.resolver.base";
import { BlogPosts } from "./base/BlogPosts";
import { BlogPostsService } from "./blogPosts.service";

@graphql.Resolver(() => BlogPosts)
export class BlogPostsResolver extends BlogPostsResolverBase {
  constructor(protected readonly service: BlogPostsService) {
    super(service);
  }
}
