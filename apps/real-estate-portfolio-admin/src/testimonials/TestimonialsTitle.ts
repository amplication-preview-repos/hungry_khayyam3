import { Testimonials as TTestimonials } from "../api/testimonials/Testimonials";

export const TESTIMONIALS_TITLE_FIELD = "clientName";

export const TestimonialsTitle = (record: TTestimonials): string => {
  return record.clientName?.toString() || String(record.id);
};
