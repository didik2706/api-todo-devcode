import { IsNotEmpty } from "class-validator";

export class CreateActivityGroupDto {
  @IsNotEmpty()
  email: string

  @IsNotEmpty()
  title: string
}
