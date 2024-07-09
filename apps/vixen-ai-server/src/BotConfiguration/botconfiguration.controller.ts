import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BotConfigurationService } from "./botconfiguration.service";
import { BotConfigInput } from "../botConfiguration/BotConfigInput";

@swagger.ApiTags("botConfigurations")
@common.Controller("botConfigurations")
export class BotConfigurationController {
  constructor(protected readonly service: BotConfigurationService) {}

  @common.Post("/bot/configure")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ConfigureBot(
    @common.Body()
    body: BotConfigInput
  ): Promise<string> {
        return this.service.ConfigureBot(body);
      }
}
