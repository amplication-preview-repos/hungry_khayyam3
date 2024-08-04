import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TestimonialsService } from "./testimonials.service";
import { TestimonialsControllerBase } from "./base/testimonials.controller.base";

@swagger.ApiTags("testimonials")
@common.Controller("testimonials")
export class TestimonialsController extends TestimonialsControllerBase {
  constructor(protected readonly service: TestimonialsService) {
    super(service);
  }
}
