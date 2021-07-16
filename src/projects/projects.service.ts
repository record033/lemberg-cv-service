import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Technology } from 'src/technologies/entities/technology.entity';

import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project) private readonly repo: Repository<Project>,
    @InjectRepository(Technology) private readonly techRepo: Repository<Technology>,
  ) {}

  create(createProjectDto: CreateProjectDto) {
    const newEntity = new Project();

    newEntity.name = createProjectDto.name;
    newEntity.description = createProjectDto.description;

    return this.repo.save(newEntity);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne(id, { relations: ['technologies'] });
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const technologies = await this.techRepo.findByIds(updateProjectDto.technologies);

    const newEntity = new Project();

    newEntity.id = id;
    newEntity.name = updateProjectDto.name;
    newEntity.description = updateProjectDto.description;
    newEntity.technologies = technologies;

    return this.repo.save(newEntity);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
