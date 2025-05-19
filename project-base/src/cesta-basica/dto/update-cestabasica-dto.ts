import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateCestaBasicaDto } from "./create-cestabasica-dto";

export class UpdateCestaBasicaDto extends PartialType(CreateCestaBasicaDto) {}
