import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Technology } from 'src/technologies/entities/technology.entity';

import { Project } from './entities/project.entity';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Technology])],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
