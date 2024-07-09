import { Bot } from "../bot/Bot";
import { Message } from "../message/Message";

export type Conversation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  endedAt: Date | null;
  startedAt: Date | null;
  bot?: Bot | null;
  messages?: Array<Message>;
};
