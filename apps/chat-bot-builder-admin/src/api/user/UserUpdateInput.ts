import { InputJsonValue } from "../../types";
import { AccountUpdateManyWithoutUsersInput } from "./AccountUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  accounts?: AccountUpdateManyWithoutUsersInput;
  role?: string | null;
};
