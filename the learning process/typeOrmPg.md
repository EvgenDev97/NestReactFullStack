TECHNIQUES Configuration  -> npm i --save @nestjs/config - для доступа к .env
ConfigModule.forRoot({isGlobal: true}) app.module


npm install --save @nestjs/typeorm typeorm pg
//
подключение
TypeOrmModule.forRootAsync({
imports:[ConfigModule],

// useFactory В Nest.js `useFactory` - это ключевая концепция, 
которая позволяет вам создавать  "провайдеры" (providers) с динамической логикой. Проще говоря, это способ задать "рецепт" 
для создания объекта, который будет использоваться в вашем приложении.
Как это работает:
1. Провайдер:  В Nest.js вы используете "провайдеры" для того, чтобы предоставить ваши сервисы, репозитории, помощники и т.д.  
2. в  зависимость другим частям вашего приложения.
2. `useFactory`:  Это свойство, которое вы используете в декораторах `@Injectable` или `@Module`. 
3. Оно указывает на функцию, которая будет отвечать за создание объекта, который вам нужен.

// useFactory is nest`s pattern for module initialization
useFactory: (configService: ConfigService) => ({
type:"postgres",
host:configService.get("DB_HOST"),
port:configService.get("DB_PORT"),
username:configService.get("DB_USERNAME"),
password:configService.get<string>("DB_PASSWORD"),
database:configService.get<string>('DB_NAME') ,
entities: ["dist/**/*.entity.js, .ts"], - проверяй все файлы в папки dist, имеющие в название entity.js
synchronize:true,  - не использовать на проде, может стереть данные в бд
}),
inject: [ConfigService],