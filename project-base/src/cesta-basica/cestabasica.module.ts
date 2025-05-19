import { Module } from "@nestjs/common";
import { CestaBasicaController } from "./cestabasica.controller";
import { CestaBasicaService } from "./cestabasica.service";
import { PrismaModule } from "../prisma/prisma.module";
import { CestaBasicaRepository } from "./repositories/cestabasica.repository";

@Module({
  imports: [PrismaModule],
  controllers: [CestaBasicaController],
  providers: [CestaBasicaService, CestaBasicaRepository],
  exports: [CestaBasicaService],
})
export class CestaBasicaModule {}
