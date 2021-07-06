import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cv {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  dob: Date;
  @Column()
  position: string;
  @Column({ type: 'text' })
  description: string;
  @Column()
  start_of_experience: Date;
  @Column()
  experience: string;
  @Column()
  english_level: string;
  @Column()
  communication_skills: string;
}
