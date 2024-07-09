import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { BotCreateNestedManyWithoutAccountsInput } from "./BotCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  user?: UserWhereUniqueInput | null;
  bots?: BotCreateNestedManyWithoutAccountsInput;
};
