import { Module } from "@nestjs/common";
import { CaseStudiesModuleBase } from "./base/caseStudies.module.base";
import { CaseStudiesService } from "./caseStudies.service";
import { CaseStudiesController } from "./caseStudies.controller";
import { CaseStudiesResolver } from "./caseStudies.resolver";

@Module({
  imports: [CaseStudiesModuleBase],
  controllers: [CaseStudiesController],
  providers: [CaseStudiesService, CaseStudiesResolver],
  exports: [CaseStudiesService],
})
export class CaseStudiesModule {}
