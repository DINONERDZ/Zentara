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
import { IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BotWhereUniqueInput } from "../../bot/base/BotWhereUniqueInput";
import { MessageUpdateManyWithoutConversationsInput } from "./MessageUpdateManyWithoutConversationsInput";

@InputType()
class ConversationUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endedAt?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: () => BotWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BotWhereUniqueInput)
  @IsOptional()
  @Field(() => BotWhereUniqueInput, {
    nullable: true,
  })
  bot?: BotWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => MessageUpdateManyWithoutConversationsInput,
  })
  @ValidateNested()
  @Type(() => MessageUpdateManyWithoutConversationsInput)
  @IsOptional()
  @Field(() => MessageUpdateManyWithoutConversationsInput, {
    nullable: true,
  })
  messages?: MessageUpdateManyWithoutConversationsInput;
}

export { ConversationUpdateInput as ConversationUpdateInput };
