import { JsonValue } from "type-fest";
import { Account } from "../account/Account";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  accounts?: Array<Account>;
  role: string | null;
};
