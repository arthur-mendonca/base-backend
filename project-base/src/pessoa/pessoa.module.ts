import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { SnowflakeModule } from "../snowflake/snowflake.module";
import { PessoaController } from "./pessoa.controller";
import { PessoaService } from "./pessoa.service";
import { PessoaRepository } from "./repositories/pessoa.repository";
import { CriancaModule } from "src/crianca/crianca.module";

@Module({
  imports: [PrismaModule, SnowflakeModule, CriancaModule],
  controllers: [PessoaController],
  providers: [PessoaService, PessoaRepository],
  exports: [PessoaService],
})
export class PessoaModule {}