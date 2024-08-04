import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlogPostsServiceBase } from "./base/blogPosts.service.base";

@Injectable()
export class BlogPostsService extends BlogPostsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
