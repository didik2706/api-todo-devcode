import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateActivityGroupDto {
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  title: string
}
