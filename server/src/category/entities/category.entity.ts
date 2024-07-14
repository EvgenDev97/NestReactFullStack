import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne, OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {User} from "../../user/entities/user.entity";
import {Transaction} from "../../transaction/entities/transaction.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn({name: "category_Id"})
    id: number;

    @Column()
    title:string

    @CreateDateColumn()
    createDate:Date

    @UpdateDateColumn()
    updateDate:Date

    @ManyToOne (()=> User, (user)=> user.category)
    @JoinColumn({name:"user_id"})
    user:User

    @OneToMany( ()=> Transaction , (transaction) => transaction.category)
    transaction:Transaction[]
}
