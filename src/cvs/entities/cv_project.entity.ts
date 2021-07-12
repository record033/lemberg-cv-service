import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Project } from 'src/projects/entities/project.entity';

import { Cv } from './cv.entity';

@Entity()
export class CvProject {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'cv_id' })
  @ManyToOne(() => Cv, (cv) => cv.cvProjects)
  cvId: number;

  @Column({ name: 'project_id' })
  @OneToOne(() => Project, (project) => project.id)
  projectId: number;

  @Column()
  role: string;
}
