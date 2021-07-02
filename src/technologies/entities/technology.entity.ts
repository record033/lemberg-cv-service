import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Technology {
    @PrimaryGeneratedColumn('increment')
    id: string;
    @Column()
    name: string
}
