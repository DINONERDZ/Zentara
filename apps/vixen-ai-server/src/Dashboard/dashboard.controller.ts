import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DashboardService } from "./dashboard.service";

@swagger.ApiTags("dashboards")
@common.Controller("dashboards")
export class DashboardController {
  constructor(protected readonly service: DashboardService) {}

  @common.Get("/dashboard")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetDashboardData(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetDashboardData(body);
      }
}
