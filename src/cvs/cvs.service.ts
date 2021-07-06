import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { Cv } from './entities/cv.entity';

@Injectable()
export class CvsService {
  constructor(@InjectRepository(Cv) private readonly repo: Repository<Cv>) {}

  create(createCvDto: CreateCvDto) {
    const newEntity = new Cv();

    newEntity.firstName = createCvDto.firstName;
    newEntity.lastName = createCvDto.lastName;
    newEntity.dob = createCvDto.dob;
    newEntity.position = createCvDto.position;
    newEntity.start_of_experience = createCvDto.start_of_experience;
    newEntity.description = createCvDto.description;
    newEntity.experience = createCvDto.experience;
    newEntity.english_level = createCvDto.englishLevel;
    newEntity.communication_skills = createCvDto.communicationSkills;

    return this.repo.save(newEntity);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne(id);
  }

  update(id: number, updateCvDto: UpdateCvDto) {
    const newEntity = new Cv();

    newEntity.firstName = updateCvDto.firstName;
    newEntity.lastName = updateCvDto.lastName;
    newEntity.dob = updateCvDto.dob;
    newEntity.position = updateCvDto.position;
    newEntity.start_of_experience = updateCvDto.start_of_experience;
    newEntity.description = updateCvDto.description;
    newEntity.experience = updateCvDto.experience;
    newEntity.english_level = updateCvDto.englishLevel;
    newEntity.communication_skills = updateCvDto.communicationSkills;

    return this.repo.update(id, newEntity);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
