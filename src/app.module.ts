import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../config';
import { TechnologiesModule } from './technologies/technologies.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    }),
    TechnologiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
