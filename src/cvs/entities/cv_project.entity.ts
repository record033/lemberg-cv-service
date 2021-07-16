import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Project } from 'src/projects/entities/project.entity';

import { Cv } from './cv.entity';

@Entity()
export class CvProject {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Cv, (cv) => cv.cvProjects)
  cv: Cv;

  @ManyToOne(() => Project, (project) => project.id)
  project: Project;

  @Column()
  projectId: number;

  @Column()
  cvId: number;

  @Column()
  role: string;
}
