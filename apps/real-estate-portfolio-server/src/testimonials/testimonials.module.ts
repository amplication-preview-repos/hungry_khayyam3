import { Module } from "@nestjs/common";
import { TestimonialsModuleBase } from "./base/testimonials.module.base";
import { TestimonialsService } from "./testimonials.service";
import { TestimonialsController } from "./testimonials.controller";
import { TestimonialsResolver } from "./testimonials.resolver";

@Module({
  imports: [TestimonialsModuleBase],
  controllers: [TestimonialsController],
  providers: [TestimonialsService, TestimonialsResolver],
  exports: [TestimonialsService],
})
export class TestimonialsModule {}
