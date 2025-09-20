import { ApiPropertyOptional, PartialType } from "@nestjs/swagger";
import { CreateUserDto } from "./create-user.dto";
import { IsOptional, IsString } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({
    description: "Senha atual do usuário. Obrigatória se uma nova senha for fornecida.",
    example: "senhaAntiga123",
  })
  @IsOptional()
  @IsString()
  senha_atual?: string;
}