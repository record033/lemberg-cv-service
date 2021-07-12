import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Project } from 'src/projects/entities/project.entity';

@Entity()
export class Technology {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  name: string;
  @ManyToMany(() => Project, (project) => project.technologies)
  projects: Project[];
}
