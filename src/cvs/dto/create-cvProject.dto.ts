import { IsString, IsInt } from 'class-validator';

export class ICvProject {
  @IsInt()
  projectId: number;

  @IsString()
  role: string;

  @IsInt()
  id?: number;
}
