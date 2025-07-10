import { Module } from "@nestjs/common";
import { CriancaController } from "./crianca.controller";
import { CriancaService } from "./crianca.service";
import { CriancaRepository } from "./repositories/crianca.repository";
import { PrismaModule } from "src/prisma/prisma.module";
import { SnowflakeModule } from "src/snowflake/snowflake.module";

@Module({
  imports: [PrismaModule, SnowflakeModule],
  controllers: [CriancaController],
  providers: [CriancaService, CriancaRepository],
  exports: [CriancaService],
})
export class CriancaModule {}
