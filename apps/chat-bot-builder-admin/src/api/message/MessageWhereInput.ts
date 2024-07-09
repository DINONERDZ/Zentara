import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";

export type MessageWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  content?: StringNullableFilter;
  conversation?: ConversationWhereUniqueInput;
};
