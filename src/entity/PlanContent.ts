import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Planhead } from "./PlanHead";
import { Exercise } from "./Exercise";

@Entity()
export class Plancontent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  session: number;

  @ManyToOne(() => Exercise, (exercise) => exercise.id)
  exercise: Exercise;

  @ManyToOne(() => Planhead, (planhead) => planhead.id)
  planhead: Planhead;

  @Column()
  weight: string;

  @Column()
  @IsNotEmpty()
  sets: string;

  @Column()
  @IsNotEmpty()
  reps: string;

  @Column()
  rest: string;

  @Column()
  observation: string;
}
