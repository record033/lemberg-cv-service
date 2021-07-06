interface ICvProject {
  projectId: number;
  role: string;
  id?: number;
}

export class CreateCvDto {
  firstName: string;
  lastName: string;
  dob: Date;
  position: string;
  start_of_experience: Date;
  description: string;
  experience: string;
  englishLevel: string;
  communicationSkills: string;
  projects: ICvProject[];
}
