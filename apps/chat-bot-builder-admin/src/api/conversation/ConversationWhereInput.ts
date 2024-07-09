import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type ConversationWhereInput = {
  id?: StringFilter;
  endedAt?: DateTimeNullableFilter;
  startedAt?: DateTimeNullableFilter;
  bot?: BotWhereUniqueInput;
  messages?: MessageListRelationFilter;
};
