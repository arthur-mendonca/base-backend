import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
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
    // 2. Lógica de validação de senha
    if (updateUserDto.senha) {
      const { senha_atual, senha } = updateUserDto;

      if (!senha_atual) {
        throw new BadRequestException("A senha atual é obrigatória para definir uma nova senha.");
      }

      const user = await this.repository.findOne(id);
      if (!user) {
        throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
      }

      const isPasswordValid = await bcrypt.compare(senha_atual, user.senha);
      if (!isPasswordValid) {
        throw new UnauthorizedException("A senha atual está incorreta.");
      }

      // Se a validação passou, faz o hash da nova senha
      updateUserDto.senha = await bcrypt.hash(senha, 10);
    }

    // Remove a senha_atual para não salvá-la no banco
    delete updateUserDto.senha_atual;

    return this.repository.update(id, updateUserDto);
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