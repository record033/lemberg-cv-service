import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Cv } from './entities/cv.entity';
import { CvProject } from './entities/cv_project.entity';
import { CvsController } from './cvs.controller';
import { CvsService } from './cvs.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cv, CvProject])],
  controllers: [CvsController],
  providers: [CvsService],
})
export class CvsModule {}
