import { Module } from "@nestjs/common";
import { BlogPostsModuleBase } from "./base/blogPosts.module.base";
import { BlogPostsService } from "./blogPosts.service";
import { BlogPostsController } from "./blogPosts.controller";
import { BlogPostsResolver } from "./blogPosts.resolver";

@Module({
  imports: [BlogPostsModuleBase],
  controllers: [BlogPostsController],
  providers: [BlogPostsService, BlogPostsResolver],
  exports: [BlogPostsService],
})
export class BlogPostsModule {}
