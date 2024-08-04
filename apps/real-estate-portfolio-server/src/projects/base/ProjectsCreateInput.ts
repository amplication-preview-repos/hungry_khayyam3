/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CaseStudiesCreateNestedManyWithoutProjectsItemsInput } from "./CaseStudiesCreateNestedManyWithoutProjectsItemsInput";
import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumProjectsClientType } from "./EnumProjectsClientType";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class ProjectsCreateInput {
  @ApiProperty({
    required: false,
    type: () => CaseStudiesCreateNestedManyWithoutProjectsItemsInput,
  })
  @ValidateNested()
  @Type(() => CaseStudiesCreateNestedManyWithoutProjectsItemsInput)
  @IsOptional()
  @Field(() => CaseStudiesCreateNestedManyWithoutProjectsItemsInput, {
    nullable: true,
  })
  caseStudiesItems?: CaseStudiesCreateNestedManyWithoutProjectsItemsInput;

  @ApiProperty({
    required: false,
    enum: EnumProjectsClientType,
  })
  @IsEnum(EnumProjectsClientType)
  @IsOptional()
  @Field(() => EnumProjectsClientType, {
    nullable: true,
  })
  clientType?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  keyFeatures?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  results?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  screenshots?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { ProjectsCreateInput as ProjectsCreateInput };
