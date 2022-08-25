import { IsNotEmpty } from 'class-validator';

export class UpdateActivityGroupDto {
  @IsNotEmpty()
  title: string
}
