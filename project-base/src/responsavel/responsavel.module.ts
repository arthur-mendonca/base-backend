import { Module } from "@nestjs/common";
import { ResponsavelService } from "./responsavel.service";
import { ResponsavelController } from "./responsavel.controller";
import { ResponsavelRepository } from "./repositories/responsavel.repository";
import { PrismaModule } from "../prisma/prisma.module";
import { SnowflakeModule } from "src/snowflake/snowflake.module";

@Module({
  imports: [PrismaModule, SnowflakeModule],
  providers: [ResponsavelService, ResponsavelRepository],
  controllers: [ResponsavelController],
  exports: [ResponsavelService],
})
export class ResponsavelModule {}
