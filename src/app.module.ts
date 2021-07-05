import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { config } from '../config';

import { TechnologiesModule } from './technologies/technologies.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot({}), TechnologiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
