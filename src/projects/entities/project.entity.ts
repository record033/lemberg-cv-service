import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('increment')
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
}
