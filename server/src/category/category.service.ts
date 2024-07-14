import {BadRequestException, Injectable} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {Repository} from "typeorm";
import {Category} from "./entities/category.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class CategoryService {

  constructor(@InjectRepository(Category)
              private readonly categoryRepository: Repository<Category>) {
  }
   async create(createCategoryDto: CreateCategoryDto, id:number) {
      //findBy = SELECT * FROM category WHERE title = "title"
    const isExist = await this.categoryRepository.findBy({
        //ERROR
        title:createCategoryDto.title,
        user:{id:id}
    })
    if(isExist.length) throw new BadRequestException('This category already exists');

    const newCategory = {
      title:createCategoryDto.title,
      user:{
        id
      }
    }

    return this.categoryRepository.save(newCategory);
  }

  async findAll(id:number) {
    return await  this.categoryRepository.find({
        //ERROR
        where:{
            user:{id:id}
        }
        // relations:{
        //     transaction:true
        // }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
