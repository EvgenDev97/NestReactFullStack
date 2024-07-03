import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TransactionModule } from './transaction/transaction.module';
import { CategoryModule } from './category/category.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";
@Module({
  imports: [
    UserModule,
    CategoryModule,
    AuthModule,
    TransactionModule,
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      // useFactory is nest`s pattern for module initialization
      useFactory: (configService: ConfigService) => ({
        type:"postgres",
        host:configService.get("DB_HOST"),
        port:configService.get("DB_PORT"),
        username:configService.get("DB_USERNAME"),
        password:configService.get<string>("DB_PASSWORD"),
        database:configService.get<string>('DB_NAME') ,
        entities: ["dist/**/*.entity.js"],
        synchronize:true,

      }),
      inject: [ConfigService],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
