import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Transaction} from "../../transaction/entities/transaction.entity";
import {Category} from "../../category/entities/category.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    //transaction link
    @OneToMany( ()=> Transaction,
        (transaction) => transaction.user, {onDelete:"CASCADE"})
    transaction:Transaction[]

    //category link
    @OneToMany( ()=> Category,
        (category)=> category.user
        )
    category:Category[]

}
