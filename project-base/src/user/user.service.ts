// filepath: src/user/user.service.ts
import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { UserRepository } from "./repositories/user.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { SnowflakeService } from "../snowflake/snowflake.service";

@Injectable()
export class UserService {
  async findById(sub: bigint) {
    // Alterado para bigint
    const user = await this.repository.findOne(sub);
    if (!user) {
      throw new NotFoundException(`Usuário com ID ${sub} não encontrado`);
    }
    return user;
  }
  constructor(
    private readonly repository: UserRepository,
    private readonly snowflakeService: SnowflakeService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const id = this.snowflakeService.generate();

    const existingUser = await this.repository.findByEmail(createUserDto.email);
    if (existingUser) {
      throw new ConflictException("Este e-mail já está em uso.");
    }

    return this.repository.create({ ...createUserDto, id_usuario: id });
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: bigint) {
    // Alterado para bigint
    return this.repository.findOne(id);
  }

  async update(id: bigint, updateUserDto: UpdateUserDto) {
    // Alterado para bigint
    return this.repository.update(id, updateUserDto);
  }

  async remove(id: bigint) {
    // Alterado para bigint
    return this.repository.remove(id);
  }

  async findByEmail(email: string) {
    return this.repository.findByEmail(email);
  }
}
