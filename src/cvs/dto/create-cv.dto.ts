import { IsDateString, IsEmail, IsOptional,IsString, ValidateNested } from 'class-validator';

import { ICvProject } from './create-cvProject.dto';

export class CreateCvDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsDateString()
  dob: Date;

  @IsString()
  position: string;

  @IsOptional()
  @IsDateString()
  start_of_experience: Date;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  englishLevel: string;

  @IsOptional()
  @IsString()
  communicationSkills: string;

  @IsOptional()
  @ValidateNested()
  cvProjects: ICvProject[];
}
