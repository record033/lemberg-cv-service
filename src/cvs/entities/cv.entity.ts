import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cv {
  @PrimaryGeneratedColumn('increment')
  id: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  dob: Date;
  @Column()
  position: string;
  @Column()
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
