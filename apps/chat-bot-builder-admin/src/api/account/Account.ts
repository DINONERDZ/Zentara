import { User } from "../user/User";
import { Bot } from "../bot/Bot";

export type Account = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  bots?: Array<Bot>;
};
