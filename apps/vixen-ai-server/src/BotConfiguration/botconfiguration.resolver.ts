import * as graphql from "@nestjs/graphql";
import { BotConfigInput } from "../botConfiguration/BotConfigInput";
import { BotConfigurationService } from "./botconfiguration.service";

export class BotConfigurationResolver {
  constructor(protected readonly service: BotConfigurationService) {}

  @graphql.Mutation(() => String)
  async ConfigureBot(
    @graphql.Args()
    args: BotConfigInput
  ): Promise<string> {
    return this.service.ConfigureBot(args);
  }
}
