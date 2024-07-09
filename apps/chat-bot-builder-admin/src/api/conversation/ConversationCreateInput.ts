import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";
import { MessageCreateNestedManyWithoutConversationsInput } from "./MessageCreateNestedManyWithoutConversationsInput";

export type ConversationCreateInput = {
  endedAt?: Date | null;
  startedAt?: Date | null;
  bot?: BotWhereUniqueInput | null;
  messages?: MessageCreateNestedManyWithoutConversationsInput;
};
