import { IsIn, IsNotEmpty } from "class-validator";

export class CreatetodoDto {
  @IsNotEmpty({ message: "activity_group_id cannot be null" })
  activity_group_id: number

  @IsNotEmpty({ message: "title cannot be null" })
  title: string
}
