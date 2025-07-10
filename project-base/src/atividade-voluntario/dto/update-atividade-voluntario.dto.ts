import { PartialType } from "@nestjs/swagger";
import { CreateAtividadeVoluntarioDto } from "./create-atividade-voluntario.dto";

export class UpdateAtividadeVoluntarioDto extends PartialType(CreateAtividadeVoluntarioDto) {}
