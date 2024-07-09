import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";
import { MessageUpdateManyWithoutConversationsInput } from "./MessageUpdateManyWithoutConversationsInput";

export type ConversationUpdateInput = {
  endedAt?: Date | null;
  startedAt?: Date | null;
  bot?: BotWhereUniqueInput | null;
  messages?: MessageUpdateManyWithoutConversationsInput;
};
