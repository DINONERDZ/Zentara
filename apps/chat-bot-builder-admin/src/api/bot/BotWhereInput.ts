import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ConversationListRelationFilter } from "../conversation/ConversationListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type BotWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  account?: AccountWhereUniqueInput;
  conversations?: ConversationListRelationFilter;
  configuration?: JsonFilter;
};
