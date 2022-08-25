import { IsIn, IsNotEmpty } from "class-validator";

export class CreateTodoDto {
  @IsNotEmpty()
  activity_group_id: number

  @IsNotEmpty()
  title: string

  @IsNotEmpty()
  @IsIn(["very-high", "high", "medium", "low", "very-low"])
  priority: string
}
