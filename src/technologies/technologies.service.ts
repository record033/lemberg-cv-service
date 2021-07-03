import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';
import { Technology } from './entities/technology.entity';

@Injectable()
export class TechnologiesService {
  constructor(@InjectRepository(Technology) private readonly repo: Repository<Technology>) {}

  public technologies: CreateTechnologyDto[] = [];

  // POST
  create(createTechnologyDto: CreateTechnologyDto) {
    const newEntity = new Technology();

    newEntity.name = createTechnologyDto.name;

    return this.repo.save(newEntity);
  }

  // GET
  findAll() {
    return this.repo.find();
  }

  // findOne(id: number) {
  //   return this.repo.findOne(id);
  // }

  // UPDATE
  update(id: number, updateTechnologyDto: UpdateTechnologyDto) {
    const newEntity = new Technology();

    newEntity.name = updateTechnologyDto.name;

    return this.repo.update(id, newEntity);
  }

  // REMOVE
  remove(id: number) {
    return this.repo.delete(id);
  }
}
