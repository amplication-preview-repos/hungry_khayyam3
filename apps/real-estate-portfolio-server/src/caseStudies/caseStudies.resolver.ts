import * as graphql from "@nestjs/graphql";
import { CaseStudiesResolverBase } from "./base/caseStudies.resolver.base";
import { CaseStudies } from "./base/CaseStudies";
import { CaseStudiesService } from "./caseStudies.service";

@graphql.Resolver(() => CaseStudies)
export class CaseStudiesResolver extends CaseStudiesResolverBase {
  constructor(protected readonly service: CaseStudiesService) {
    super(service);
  }
}
