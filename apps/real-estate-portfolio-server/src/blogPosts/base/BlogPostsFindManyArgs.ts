/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BlogPostsWhereInput } from "./BlogPostsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BlogPostsOrderByInput } from "./BlogPostsOrderByInput";

@ArgsType()
class BlogPostsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BlogPostsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BlogPostsWhereInput, { nullable: true })
  @Type(() => BlogPostsWhereInput)
  where?: BlogPostsWhereInput;

  @ApiProperty({
    required: false,
    type: [BlogPostsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BlogPostsOrderByInput], { nullable: true })
  @Type(() => BlogPostsOrderByInput)
  orderBy?: Array<BlogPostsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BlogPostsFindManyArgs as BlogPostsFindManyArgs };