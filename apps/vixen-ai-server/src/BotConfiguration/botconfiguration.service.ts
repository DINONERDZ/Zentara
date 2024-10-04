import { Injectable } from "@nestjs/common";
import { BotConfigInput } from "../botConfiguration/BotConfigInput";

@Injectable()
export class BotConfigurationService {
  constructor() {}
  async ConfigureBot(args: BotConfigInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
