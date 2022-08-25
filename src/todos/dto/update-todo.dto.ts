import { IsBoolean, IsNotEmpty, IsOptional } from "class-validator";

export class UpdateTodoDto {
  @IsBoolean()
  @IsOptional()
  is_active?: boolean

  @IsNotEmpty()
  @IsOptional()
  title?: string
}
