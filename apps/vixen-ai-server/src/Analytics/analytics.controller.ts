import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AnalyticsService } from "./analytics.service";

@swagger.ApiTags("analytics")
@common.Controller("analytics")
export class AnalyticsController {
  constructor(protected readonly service: AnalyticsService) {}

  @common.Get("/analytics/bot/:botId")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetBotAnalytics(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetBotAnalytics(body);
      }
}
