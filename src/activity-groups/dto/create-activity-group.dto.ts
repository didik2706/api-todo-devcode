import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateactivityDto {
  @IsNotEmpty({ message: "email cannot be null" })
  @IsEmail()
  email: string

  @IsNotEmpty({ message: "title cannot be null" })
  title: string
}
