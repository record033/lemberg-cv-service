import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProjectsModule } from './projects/projects.module';
import { TechnologiesModule } from './technologies/technologies.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CvsModule } from './cvs/cvs.module';

@Module({
  imports: [TypeOrmModule.forRoot({}), TechnologiesModule, ProjectsModule, CvsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
