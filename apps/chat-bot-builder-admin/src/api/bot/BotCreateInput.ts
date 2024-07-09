import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ConversationCreateNestedManyWithoutBotsInput } from "./ConversationCreateNestedManyWithoutBotsInput";
import { InputJsonValue } from "../../types";

export type BotCreateInput = {
  name?: string | null;
  account?: AccountWhereUniqueInput | null;
  conversations?: ConversationCreateNestedManyWithoutBotsInput;
  configuration?: InputJsonValue;
};
