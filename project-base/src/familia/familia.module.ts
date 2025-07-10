import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { SnowflakeModule } from "src/snowflake/snowflake.module";
import { FamiliaController } from "./familia.controller";
import { FamiliaService } from "./familia.service";
import { FamiliaRepository } from "./repositories/familia.repository";

@Module({
  imports: [PrismaModule, SnowflakeModule],
  controllers: [FamiliaController],
  providers: [FamiliaService, FamiliaRepository],
})
export class FamiliaModule {}
