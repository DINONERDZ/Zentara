/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Conversation as PrismaConversation,
  Message as PrismaMessage,
  Bot as PrismaBot,
} from "@prisma/client";

export class ConversationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ConversationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.conversation.count(args);
  }

  async conversations(
    args: Prisma.ConversationFindManyArgs
  ): Promise<PrismaConversation[]> {
    return this.prisma.conversation.findMany(args);
  }
  async conversation(
    args: Prisma.ConversationFindUniqueArgs
  ): Promise<PrismaConversation | null> {
    return this.prisma.conversation.findUnique(args);
  }
  async createConversation(
    args: Prisma.ConversationCreateArgs
  ): Promise<PrismaConversation> {
    return this.prisma.conversation.create(args);
  }
  async updateConversation(
    args: Prisma.ConversationUpdateArgs
  ): Promise<PrismaConversation> {
    return this.prisma.conversation.update(args);
  }
  async deleteConversation(
    args: Prisma.ConversationDeleteArgs
  ): Promise<PrismaConversation> {
    return this.prisma.conversation.delete(args);
  }

  async findMessages(
    parentId: string,
    args: Prisma.MessageFindManyArgs
  ): Promise<PrismaMessage[]> {
    return this.prisma.conversation
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .messages(args);
  }

  async getBot(parentId: string): Promise<PrismaBot | null> {
    return this.prisma.conversation
      .findUnique({
        where: { id: parentId },
      })
      .bot();
  }
}
