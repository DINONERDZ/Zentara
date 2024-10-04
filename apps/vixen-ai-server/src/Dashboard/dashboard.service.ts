import { Injectable } from "@nestjs/common";

@Injectable()
export class DashboardService {
  constructor() {}
  async GetDashboardData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
