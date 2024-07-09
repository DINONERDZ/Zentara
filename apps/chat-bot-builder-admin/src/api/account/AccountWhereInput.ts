import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { BotListRelationFilter } from "../bot/BotListRelationFilter";

export type AccountWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  bots?: BotListRelationFilter;
};
