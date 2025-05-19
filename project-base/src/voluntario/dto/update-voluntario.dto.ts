import { PartialType } from "@nestjs/swagger";
import { CreateVoluntarioDto } from "./create-voluntario.dto";

export class UpdateVoluntarioDto extends PartialType(CreateVoluntarioDto) {}
