import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { SnowflakeModule } from "../snowflake/snowflake.module";
import { DoacaoController } from "./doacao.controller";
import { DoacaoService } from "./doacao.service";
import { DoacaoRepository } from "./repositories/doacao.repository";

@Module({
  imports: [PrismaModule, SnowflakeModule],
  controllers: [DoacaoController],
  providers: [DoacaoService, DoacaoRepository],
  exports: [DoacaoService],
})
export class DoacaoModule {}
