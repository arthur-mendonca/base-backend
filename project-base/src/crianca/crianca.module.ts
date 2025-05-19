import { Module } from "@nestjs/common";
import { CriancaService } from "./crianca.service";
import { CriancaController } from "./crianca.controller";
import { CriancaRepository } from "./repositories/crianca.repository";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  providers: [CriancaService, CriancaRepository],
  controllers: [CriancaController],
  exports: [CriancaService],
})
export class CriancaModule {}
