import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CaseStudiesService } from "./caseStudies.service";
import { CaseStudiesControllerBase } from "./base/caseStudies.controller.base";

@swagger.ApiTags("caseStudies")
@common.Controller("caseStudies")
export class CaseStudiesController extends CaseStudiesControllerBase {
  constructor(protected readonly service: CaseStudiesService) {
    super(service);
  }
}
