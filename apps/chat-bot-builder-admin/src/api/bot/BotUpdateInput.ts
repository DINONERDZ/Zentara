import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ConversationUpdateManyWithoutBotsInput } from "./ConversationUpdateManyWithoutBotsInput";
import { InputJsonValue } from "../../types";

export type BotUpdateInput = {
  name?: string | null;
  account?: AccountWhereUniqueInput | null;
  conversations?: ConversationUpdateManyWithoutBotsInput;
  configuration?: InputJsonValue;
};
