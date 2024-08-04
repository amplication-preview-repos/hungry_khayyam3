/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { BlogPosts } from "./BlogPosts";
import { BlogPostsCountArgs } from "./BlogPostsCountArgs";
import { BlogPostsFindManyArgs } from "./BlogPostsFindManyArgs";
import { BlogPostsFindUniqueArgs } from "./BlogPostsFindUniqueArgs";
import { CreateBlogPostsArgs } from "./CreateBlogPostsArgs";
import { UpdateBlogPostsArgs } from "./UpdateBlogPostsArgs";
import { DeleteBlogPostsArgs } from "./DeleteBlogPostsArgs";
import { BlogPostsService } from "../blogPosts.service";
@graphql.Resolver(() => BlogPosts)
export class BlogPostsResolverBase {
  constructor(protected readonly service: BlogPostsService) {}

  async _blogPostsItemsMeta(
    @graphql.Args() args: BlogPostsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BlogPosts])
  async blogPostsItems(
    @graphql.Args() args: BlogPostsFindManyArgs
  ): Promise<BlogPosts[]> {
    return this.service.blogPostsItems(args);
  }

  @graphql.Query(() => BlogPosts, { nullable: true })
  async blogPosts(
    @graphql.Args() args: BlogPostsFindUniqueArgs
  ): Promise<BlogPosts | null> {
    const result = await this.service.blogPosts(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BlogPosts)
  async createBlogPosts(
    @graphql.Args() args: CreateBlogPostsArgs
  ): Promise<BlogPosts> {
    return await this.service.createBlogPosts({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => BlogPosts)
  async updateBlogPosts(
    @graphql.Args() args: UpdateBlogPostsArgs
  ): Promise<BlogPosts | null> {
    try {
      return await this.service.updateBlogPosts({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => BlogPosts)
  async deleteBlogPosts(
    @graphql.Args() args: DeleteBlogPostsArgs
  ): Promise<BlogPosts | null> {
    try {
      return await this.service.deleteBlogPosts(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
