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

    newEntity.name = CreateTechnologyDto.name;

    return this.repo.save(newEntity);
  }

  // GET
  async findAll() {
    return await this.repo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} technology`;
  }

  // UPDATE
  update(id: number, updateTechnologyDto: UpdateTechnologyDto) {
    return `This action updates a #${id} technology`;
  }

  // REMOVE
  remove(id: number) {
    return `This action removes a #${id} technology`;
  }
}
