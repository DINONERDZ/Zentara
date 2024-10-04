import { Injectable } from "@nestjs/common";

@Injectable()
export class AnalyticsService {
  constructor() {}
  async GetBotAnalytics(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
