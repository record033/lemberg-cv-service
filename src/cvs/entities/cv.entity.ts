import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { CvProject } from './cv_project.entity';

@Entity()
export class Cv {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  dob: Date;

  @Column()
  position: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ name: 'start_of_experience' })
  startOfExperience: Date;

  @Column({ name: 'english_level' })
  englishLevel: string;

  @Column({ name: 'communication_skill' })
  communicationSkills: string;

  @OneToMany(() => CvProject, (cvProject) => cvProject.cv, { cascade: true })
  cvProjects: CvProject[];
}
