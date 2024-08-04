import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BlogPostsService } from "./blogPosts.service";
import { BlogPostsControllerBase } from "./base/blogPosts.controller.base";

@swagger.ApiTags("blogPosts")
@common.Controller("blogPosts")
export class BlogPostsController extends BlogPostsControllerBase {
  constructor(protected readonly service: BlogPostsService) {
    super(service);
  }
}
