import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";

export type MessageCreateInput = {
  timestamp?: Date | null;
  content?: string | null;
  conversation?: ConversationWhereUniqueInput | null;
};
