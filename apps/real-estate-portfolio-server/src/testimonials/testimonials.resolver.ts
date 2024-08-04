import * as graphql from "@nestjs/graphql";
import { TestimonialsResolverBase } from "./base/testimonials.resolver.base";
import { Testimonials } from "./base/Testimonials";
import { TestimonialsService } from "./testimonials.service";

@graphql.Resolver(() => Testimonials)
export class TestimonialsResolver extends TestimonialsResolverBase {
  constructor(protected readonly service: TestimonialsService) {
    super(service);
  }
}
