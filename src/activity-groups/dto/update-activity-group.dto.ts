import { IsNotEmpty } from 'class-validator';

export class UpdateactivityDto {
  @IsNotEmpty()
  title: string
}
