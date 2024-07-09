import { InputJsonValue } from "../../types";
import { AccountCreateNestedManyWithoutUsersInput } from "./AccountCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  accounts?: AccountCreateNestedManyWithoutUsersInput;
  role?: string | null;
};
