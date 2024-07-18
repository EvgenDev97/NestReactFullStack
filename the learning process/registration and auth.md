1 - create-user.dto.ts - описывает входящие параметры, service.ts принимает в себя dto
    nest overview - pipes - class Validator
2 - user.module - подключить user.entity - imports: [TypeOrmModule.forFeature([User])
3 - user.controller
4- user.service metod create
5 - пароль необходимо хешировать


6 - Passport (authentication) nest.js recipes passport
7- user.service findOne
8 - user.module export:[UserService],
9 - auth.service validateUser function,
10 -auth.module imports:[UserModule],
11 - auth/local.strategy.ts copy code from docs
12 - в auth.module import passport module and local strategy 
13 - в auth.controller добавить @UseGuard - запрос отправляется по роуту api/auth/login, прежде чем выполнится запрос
    выполнится, authGuard сделай проверку .Гуард заходит В local.strategy функция validateUser, который идет в auth.service функция validateUser
14 - создать папку guards/ local-auth.guard.ts - создать отдельный новый гуард который экстендится от AuthGuard из @nestjs/passport 
15 - передать в useGuard передать класс созданного гуарда
/////
17 - JWT
18- auth.service constructor (jwtService:JwtService)
19 - function login - при логине нужно возвращать токен, а токен необходимо формировать на основе чего либо, в данном случе id  и  email
    this.jwtService.sign()
    jwt хранится в .env - случайная константа
20- в auth.module подключить jwt.module
    JwtModule.registerAsync({
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        // token lifetime
        signOptions: {expiresIn: "30d"}
        }),
    inject: [ConfigService],
    })

21 - jwt.strategy.ts 
22 - jwt-auth.guard.ts extends jwt
23 -@Get('profile') jwt-auth.guard.ts

///registration 
User.module - добавить jwtModule
user.service вернуть токен 