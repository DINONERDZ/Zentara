import { Module } from "@nestjs/common";
import { BotConfigurationService } from "./botconfiguration.service";
import { BotConfigurationController } from "./botconfiguration.controller";
import { BotConfigurationResolver } from "./botconfiguration.resolver";

@Module({
  controllers: [BotConfigurationController],
  providers: [BotConfigurationService, BotConfigurationResolver],
  exports: [BotConfigurationService],
})
export class BotConfigurationModule {}
