import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { SnowflakeModule } from "../snowflake/snowflake.module";
import { AtividadeController } from "./atividade.controller";
import { AtividadeService } from "./atividade.service";
import { AtividadeRepository } from "./repositories/atividade.repository";

@Module({
  imports: [PrismaModule, SnowflakeModule],
  controllers: [AtividadeController],
  providers: [AtividadeService, AtividadeRepository],
  exports: [AtividadeService],
})
export class AtividadeModule {}
