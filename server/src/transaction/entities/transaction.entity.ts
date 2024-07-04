import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {User} from "../../user/entities/user.entity";
import {Category} from "../../category/entities/category.entity";

@Entity()
export class Transaction {

    @PrimaryGeneratedColumn({name:'transactionId'})
    id:number

    @Column({nullable:true})
    title:string

    @Column()
    amount:number

    @CreateDateColumn()
    createDate:Date

    @UpdateDateColumn()
    updateDate:Date


    @ManyToOne(()=> User, (user)=> user.transaction)
    @JoinColumn({name: "user_id"})
    user:User

    @ManyToOne( ()=> Category, (category) => category.transaction)
    @JoinColumn({name:"category_id"})
    category:Category
}
