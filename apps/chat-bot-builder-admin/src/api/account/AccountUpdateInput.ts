import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { BotUpdateManyWithoutAccountsInput } from "./BotUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  user?: UserWhereUniqueInput | null;
  bots?: BotUpdateManyWithoutAccountsInput;
};
