import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { UserRepository } from "./repositories/user.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { SnowflakeService } from "../snowflake/snowflake.service";
import * as bcrypt from "bcrypt";
import { Prisma } from "@prisma/client";

@Injectable()
export class UserService {
  constructor(
    private readonly repository: UserRepository,
    private readonly snowflakeService: SnowflakeService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // Verificar se já existe usuário com o mesmo email
    const existingUser = await this.repository.findByEmail(createUserDto.email);
    if (existingUser) {
      throw new ConflictException("Este e-mail já está em uso.");
    }

    const id = this.snowflakeService.generate();

    // Criptografar a senha
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(createUserDto.senha, saltOrRounds);

    const userData: Prisma.UsuarioCreateInput = {
      id_usuario: id,
      nome: createUserDto.nome,
      email: createUserDto.email,
      senha: hashedPassword,
      perfil: createUserDto.perfil,
    };

    return this.repository.create(userData);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: bigint) {
    return this.repository.findOne(id);
  }

  async findById(id: bigint) {
    const user = await this.repository.findOne(id);
    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }
    return user;
  }

  async update(id: bigint, updateUserDto: UpdateUserDto) {
    let userToUpdate = { ...updateUserDto };

    // Se a senha estiver presente no DTO, criptografá-la
    if (updateUserDto.senha) {
      const saltOrRounds = 10;
      const hashedPassword = await bcrypt.hash(updateUserDto.senha, saltOrRounds);
      userToUpdate = { ...updateUserDto, senha: hashedPassword };
    }

    return this.repository.update(id, userToUpdate);
  }

  async remove(id: bigint) {
    return this.repository.remove(id);
  }

  async findByEmail(email: string) {
    return this.repository.findByEmail(email);
  }

  async findByPerfil(perfil: string) {
    return this.repository.findByPerfil(perfil);
  }

  async findByNome(nome: string) {
    return this.repository.findByNome(nome);
  }

  async findRecentlyCreated(days: number = 30) {
    return this.repository.findRecentlyCreated(days);
  }

  async generateReport(filter: any) {
    const { perfil, dataCriacaoInicio, dataCriacaoFim, nome } = filter;

    let usuarios = await this.findAll();

    if (perfil) {
      usuarios = usuarios.filter(usuario => usuario.perfil === perfil);
    }

    if (dataCriacaoInicio && dataCriacaoFim) {
      const inicio = new Date(dataCriacaoInicio);
      const fim = new Date(dataCriacaoFim);

      usuarios = usuarios.filter(usuario => {
        const dataCadastro = new Date(usuario.data_cadastro);
        return dataCadastro >= inicio && dataCadastro <= fim;
      });
    }

    if (nome) {
      usuarios = usuarios.filter(usuario => usuario.nome.toLowerCase().includes(nome.toLowerCase()));
    }

    return usuarios;
  }
}
