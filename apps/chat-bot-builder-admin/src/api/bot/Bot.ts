import { Account } from "../account/Account";
import { Conversation } from "../conversation/Conversation";
import { JsonValue } from "type-fest";

export type Bot = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  account?: Account | null;
  conversations?: Array<Conversation>;
  configuration: JsonValue;
};
