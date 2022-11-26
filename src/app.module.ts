import { Module } from '@nestjs/common';
import { AppController,AdminController,CatsController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [],
  controllers: [AppController,CatsController,AdminController],
  providers: [AppService],
})
export class AppModule {}
