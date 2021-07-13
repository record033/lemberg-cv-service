import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/projects/entities/project.entity';
import { Repository } from 'typeorm';

import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { Cv } from './entities/cv.entity';
import { CvProject } from './entities/cv_project.entity';

@Injectable()
export class CvsService {
  constructor(
    @InjectRepository(Cv) private readonly repo: Repository<Cv>,
    @InjectRepository(CvProject) private readonly cvProjectRepo: Repository<CvProject>,
    @InjectRepository(Project) private readonly projectRepo: Repository<Project>,
  ) {}

  async create(createCvDto: CreateCvDto) {
    const newEntity = new Cv();

    newEntity.firstName = createCvDto.firstName;
    newEntity.lastName = createCvDto.lastName;
    newEntity.email = createCvDto.email;
    newEntity.dob = createCvDto.dob;
    newEntity.position = createCvDto.position;
    newEntity.startOfExperience = createCvDto.start_of_experience;
    newEntity.description = createCvDto.description;
    newEntity.experience = createCvDto.experience;
    newEntity.englishLevel = createCvDto.englishLevel;
    newEntity.communicationSkills = createCvDto.communicationSkills;

    return this.repo.save(newEntity);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne(id, { relations: ['cvProjects'] });
  }

  async update(id: number, updateCvDto: UpdateCvDto) {
    const cv = await this.repo.findOne(id, { relations: ['cvProjects'] });

    console.log(cv);

    const projects = updateCvDto.cvProjects;
    delete updateCvDto.cvProjects;

    await this.repo.update(cv.id, updateCvDto);
    cv.cvProjects.push(
      ...(await Promise.all(
        projects.map(async (p) => {
          console.log(p);
          const cvProjectEntity = this.cvProjectRepo.create({
            cv: cv,
            projectId: p.projectId,
            role: p.role,
          });
          await this.cvProjectRepo.save(cvProjectEntity);

          return cvProjectEntity;
        }),
      )),
    );

    return cv;
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
