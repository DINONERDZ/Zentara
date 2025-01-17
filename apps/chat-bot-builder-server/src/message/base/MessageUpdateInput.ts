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
import {
  IsDate,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { ConversationWhereUniqueInput } from "../../conversation/base/ConversationWhereUniqueInput";

@InputType()
class MessageUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timestamp?: Date | null;

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
  content?: string | null;

  @ApiProperty({
    required: false,
    type: () => ConversationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ConversationWhereUniqueInput)
  @IsOptional()
  @Field(() => ConversationWhereUniqueInput, {
    nullable: true,
  })
  conversation?: ConversationWhereUniqueInput | null;
}

export { MessageUpdateInput as MessageUpdateInput };
