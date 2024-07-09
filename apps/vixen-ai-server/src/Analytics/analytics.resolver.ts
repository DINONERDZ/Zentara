import * as graphql from "@nestjs/graphql";
import { AnalyticsService } from "./analytics.service";

export class AnalyticsResolver {
  constructor(protected readonly service: AnalyticsService) {}

  @graphql.Query(() => String)
  async GetBotAnalytics(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetBotAnalytics(args);
  }
}
