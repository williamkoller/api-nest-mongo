import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.de2sp.mongodb.net/users??retryWrites=true&w=majority'),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
