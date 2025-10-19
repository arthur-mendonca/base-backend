import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { DoacaoRepository } from "./repositories/doacao.repository";
import { CreateDoacaoDto } from "./dto/create-doacao.dto";
import { UpdateDoacaoDto } from "./dto/update-doacao.dto";
import { SnowflakeService } from "../snowflake/snowflake.service";
import { TipoDoacao } from "@prisma/client";

@Injectable()
export class DoacaoService {
  constructor(
    private readonly repository: DoacaoRepository,
    private readonly snowflakeService: SnowflakeService,
  ) {}

  async create(createDoacaoDto: CreateDoacaoDto) {
    // Validar se doação monetária tem valor
    if (createDoacaoDto.tipo === TipoDoacao.monetaria && !createDoacaoDto.valor) {
      throw new BadRequestException("Doações monetárias devem ter um valor informado");
    }

    const id = this.snowflakeService.generate();

    const doacaoData = {
      ...createDoacaoDto,
      id_doacao: id,
    };

    return this.repository.create(doacaoData);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: bigint) {
    const doacao = await this.repository.findOne(id);

    if (!doacao) {
      throw new NotFoundException(`Doação com ID ${id} não encontrada`);
    }

    return doacao;
  }

  async update(id: bigint, updateDoacaoDto: UpdateDoacaoDto) {
    // Verificar se a doação existe
    await this.findOne(id);

    // Validar se doação monetária tem valor
    if (updateDoacaoDto.tipo === TipoDoacao.monetaria && !updateDoacaoDto.valor) {
      throw new BadRequestException("Doações monetárias devem ter um valor informado");
    }

    return this.repository.update(id, updateDoacaoDto);
  }

  async remove(id: bigint) {
    // Verificar se a doação existe
    await this.findOne(id);

    return this.repository.remove(id);
  }

  async findByParceiro(id_parceiro: bigint) {
    return this.repository.findByParceiro(id_parceiro);
  }

  async findByTipo(tipo: TipoDoacao) {
    return this.repository.findByTipo(tipo);
  }

  async findAnonimas() {
    return this.repository.findAnonimas();
  }
}