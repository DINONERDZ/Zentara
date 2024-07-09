import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";

export type MessageUpdateInput = {
  timestamp?: Date | null;
  content?: string | null;
  conversation?: ConversationWhereUniqueInput | null;
};
