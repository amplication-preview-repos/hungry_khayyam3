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
import { ContactInquiriesWhereInput } from "./ContactInquiriesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ContactInquiriesOrderByInput } from "./ContactInquiriesOrderByInput";

@ArgsType()
class ContactInquiriesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ContactInquiriesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ContactInquiriesWhereInput, { nullable: true })
  @Type(() => ContactInquiriesWhereInput)
  where?: ContactInquiriesWhereInput;

  @ApiProperty({
    required: false,
    type: [ContactInquiriesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ContactInquiriesOrderByInput], { nullable: true })
  @Type(() => ContactInquiriesOrderByInput)
  orderBy?: Array<ContactInquiriesOrderByInput>;

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

export { ContactInquiriesFindManyArgs as ContactInquiriesFindManyArgs };
