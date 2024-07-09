import { SortOrder } from "../../util/SortOrder";

export type ConversationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  endedAt?: SortOrder;
  startedAt?: SortOrder;
  botId?: SortOrder;
};
