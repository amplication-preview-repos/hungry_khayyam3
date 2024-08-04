/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Testimonials } from "./Testimonials";
import { TestimonialsCountArgs } from "./TestimonialsCountArgs";
import { TestimonialsFindManyArgs } from "./TestimonialsFindManyArgs";
import { TestimonialsFindUniqueArgs } from "./TestimonialsFindUniqueArgs";
import { CreateTestimonialsArgs } from "./CreateTestimonialsArgs";
import { UpdateTestimonialsArgs } from "./UpdateTestimonialsArgs";
import { DeleteTestimonialsArgs } from "./DeleteTestimonialsArgs";
import { TestimonialsService } from "../testimonials.service";
@graphql.Resolver(() => Testimonials)
export class TestimonialsResolverBase {
  constructor(protected readonly service: TestimonialsService) {}

  async _testimonialsItemsMeta(
    @graphql.Args() args: TestimonialsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Testimonials])
  async testimonialsItems(
    @graphql.Args() args: TestimonialsFindManyArgs
  ): Promise<Testimonials[]> {
    return this.service.testimonialsItems(args);
  }

  @graphql.Query(() => Testimonials, { nullable: true })
  async testimonials(
    @graphql.Args() args: TestimonialsFindUniqueArgs
  ): Promise<Testimonials | null> {
    const result = await this.service.testimonials(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Testimonials)
  async createTestimonials(
    @graphql.Args() args: CreateTestimonialsArgs
  ): Promise<Testimonials> {
    return await this.service.createTestimonials({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Testimonials)
  async updateTestimonials(
    @graphql.Args() args: UpdateTestimonialsArgs
  ): Promise<Testimonials | null> {
    try {
      return await this.service.updateTestimonials({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Testimonials)
  async deleteTestimonials(
    @graphql.Args() args: DeleteTestimonialsArgs
  ): Promise<Testimonials | null> {
    try {
      return await this.service.deleteTestimonials(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
