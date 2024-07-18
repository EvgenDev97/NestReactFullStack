1 category.module imports:[TypeOrmModule.forFeature([Category])],
2 create-category.dto.ts - типы того, что POST запрос поместит в бд (title, user в данном конкретном случе)
3- category service @InjectRepository
4 Create
    Проверить наличие title - typeOrm findOne (см category.service )
    создать новую категорию поля для категории - create.category.dto
    typeOrm .save создаст таблицу в PostgreSQL
    логика запроса category.service.ts - create
    за обработку запроса отвечает - category.controller.ts
    
5 - category.controller @UseGuards(JwtAuthGuard) позволит получить из Request юзера

6 -findAll 


relations:{
    transaction:true
}

relations:{
    user:true
}

поддтягивают данные из таблиц user и transaction 