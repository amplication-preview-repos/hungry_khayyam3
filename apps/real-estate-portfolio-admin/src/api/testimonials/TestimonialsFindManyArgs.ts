import { TestimonialsWhereInput } from "./TestimonialsWhereInput";
import { TestimonialsOrderByInput } from "./TestimonialsOrderByInput";

export type TestimonialsFindManyArgs = {
  where?: TestimonialsWhereInput;
  orderBy?: Array<TestimonialsOrderByInput>;
  skip?: number;
  take?: number;
};
