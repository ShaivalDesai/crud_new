import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name:'todos'})
export class Todo{
// save() {
//   throw new Error('Method not implemented.');
// }
@PrimaryGeneratedColumn()
id:number;

@Column()
title:string;

// @Column()
// email:string;

// @Column()
// password:string;


}