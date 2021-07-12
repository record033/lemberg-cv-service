import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
  ) {}

  async create(createCvDto: CreateCvDto) {
    const newEntity = new Cv();

    // const cvProjects = await this.cvProjectRepo.findByIds(createCvDto.projects.map((x) => x.id));
    const cvProjects = createCvDto.projects.map((x) => {
      const newCvProjects = new CvProject();

      newCvProjects.projectId = x.projectId;
      newCvProjects.role = x.role;

      return newCvProjects;
    });

    // await this.cvProjectRepo.insert(cvProjects);
    newEntity.firstName = createCvDto.firstName;
    newEntity.lastName = createCvDto.lastName;
    newEntity.dob = createCvDto.dob;
    newEntity.position = createCvDto.position;
    newEntity.startOfExperience = createCvDto.start_of_experience;
    newEntity.description = createCvDto.description;
    newEntity.experience = createCvDto.experience;
    newEntity.englishLevel = createCvDto.englishLevel;
    newEntity.communicationSkills = createCvDto.communicationSkills;
    // newEntity.cvProjects = cvProjects;

    return this.repo.save(newEntity);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne(id, { relations: ['cvProjects'] });
  }

  async update(id: number, updateCvDto: UpdateCvDto) {
    const cvProjects = await this.cvProjectRepo.findByIds(updateCvDto.projects.map((x) => x.id));
    const newEntity = new Cv();

    newEntity.firstName = updateCvDto.firstName;
    newEntity.lastName = updateCvDto.lastName;
    newEntity.dob = updateCvDto.dob;
    newEntity.position = updateCvDto.position;
    newEntity.startOfExperience = updateCvDto.start_of_experience;
    newEntity.description = updateCvDto.description;
    newEntity.experience = updateCvDto.experience;
    newEntity.englishLevel = updateCvDto.englishLevel;
    newEntity.communicationSkills = updateCvDto.communicationSkills;
    newEntity.cvProjects = cvProjects;

    return this.repo.update(id, newEntity);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
