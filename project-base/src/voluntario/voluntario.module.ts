import { Module } from "@nestjs/common";
import { VoluntarioService } from "./voluntario.service";
import { VoluntarioController } from "./voluntario.controller";
import { VoluntarioRepository } from "./repositories/voluntario.repository";
import { PrismaModule } from "../prisma/prisma.module";
import { SnowflakeModule } from "../snowflake/snowflake.module";

@Module({
  imports: [PrismaModule, SnowflakeModule],
  providers: [VoluntarioService, VoluntarioRepository],
  controllers: [VoluntarioController],
  exports: [VoluntarioService],
})
export class VoluntarioModule {}