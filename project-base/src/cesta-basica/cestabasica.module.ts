import { Module } from "@nestjs/common";
import { CestaBasicaController } from "./cestabasica.controller";
import { CestaBasicaService } from "./cestabasica.service";
import { PrismaModule } from "../prisma/prisma.module";
import { CestaBasicaRepository } from "./repositories/cestabasica.repository";
import { SnowflakeModule } from "src/snowflake/snowflake.module";

@Module({
  imports: [PrismaModule, SnowflakeModule],
  controllers: [CestaBasicaController],
  providers: [CestaBasicaService, CestaBasicaRepository],
  exports: [CestaBasicaService],
})
export class CestaBasicaModule {}
