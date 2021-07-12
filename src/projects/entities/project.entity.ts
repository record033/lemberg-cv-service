import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Technology } from 'src/technologies/entities/technology.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  // @ManyToMany(() => Technology, (technology) => technology.projects)
  @JoinTable({ name: 'project_technologies' })
  technologies: Technology[];
}
