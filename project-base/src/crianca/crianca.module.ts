import { Module } from "@nestjs/common";
import { CriancaService } from "./crianca.service";
import { CriancaController } from "./crianca.controller";
import { CriancaRepository } from "./repositories/crianca.repository";
import { PrismaModule } from "../prisma/prisma.module";
import { SnowflakeModule } from "src/snowflake/snowflake.module";

@Module({
  imports: [PrismaModule, SnowflakeModule],
  providers: [CriancaService, CriancaRepository],
  controllers: [CriancaController],
  exports: [CriancaService],
})
export class CriancaModule {}
