import { Injectable, NotFoundException } from "@nestjs/common";
import { UserRepository } from "./repositories/user.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  findById(sub: number) {
    throw new Error("Method not implemented.");
  }
  constructor(private readonly repository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    return this.repository.create(createUserDto);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number) {
    return this.repository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.repository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return this.repository.remove(id);
  }

  async findByEmail(email: string) {
    return this.repository.findByEmail(email);
  }
}
