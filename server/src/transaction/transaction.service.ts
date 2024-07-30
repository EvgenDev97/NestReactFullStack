import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Transaction} from "./entities/transaction.entity";
import {Repository} from "typeorm";

@Injectable()
export class TransactionService {
  constructor(@InjectRepository(Transaction) private readonly transactionRepository:Repository<Transaction>) {
  }

  async create(createTransactionDto: CreateTransactionDto, id:number) {
    const newTransaction = {
      title:createTransactionDto.title,
      amount:createTransactionDto.amount,
      type:createTransactionDto.type,
      user:{id:id},
      category:{id:+createTransactionDto.category}
    }

    if(!newTransaction) throw new BadRequestException("Something went wrong...")
    return await this.transactionRepository.save(newTransaction)
  }

  async findAll(id:number) {
    const transactions = await  this.transactionRepository.find({
      where:{
        user:{id:id}
      },
      order:{
        createDate:"DESC"
      },
      relations: {
        category:true
      }
    })
    return transactions
  }

  async findOne(id: number) {
    const isExist = await this.transactionRepository.findOne({
      where:{id},
      relations:{
        user:true,
        category:true
      },
      order:{
        updateDate:"DESC"
      }
    })
    if(!isExist) throw new NotFoundException("category not found")
    return isExist
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    const isExist = await this.transactionRepository.findOne({
      where:{id}
    })

    if(!isExist) throw new NotFoundException("Category for update not found")
    return await this.transactionRepository.update(id, updateTransactionDto)
  }

  async remove(id: number) {
    const isExist = await this.transactionRepository.findOne({
      where:{id}
    })
    if(!isExist) return new NotFoundException("Transaction not found")
    return  await this.transactionRepository.delete(id)
  }



  async findAllWithPagination(id:number,page:number, limit:number){
    const transactions = await this.transactionRepository.find({
      where:{
        user: {id}
      },
      relations:{
        category:true,
        user:true
      },
      order:{
        createDate:"DESC"
      },
      // pagination
      take:limit,
      skip:(page - 1) * limit
    })

    return transactions
  }
}
