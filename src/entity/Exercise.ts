import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity()
export class Exercise {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    name: string;

    @Column()
    muscle_group: string;

    @Column()
    description: string;

}
