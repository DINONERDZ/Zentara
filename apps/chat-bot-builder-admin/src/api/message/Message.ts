import { Conversation } from "../conversation/Conversation";

export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  timestamp: Date | null;
  content: string | null;
  conversation?: Conversation | null;
};
