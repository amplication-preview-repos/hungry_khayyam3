import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CaseStudiesServiceBase } from "./base/caseStudies.service.base";

@Injectable()
export class CaseStudiesService extends CaseStudiesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
