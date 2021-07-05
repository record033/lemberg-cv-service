import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(@InjectRepository(Project) private readonly repo: Repository<Project>) {}

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
    return this.repo.findOne(id);
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    const newEntity = new Project();

    newEntity.name = updateProjectDto.name;
    newEntity.description = updateProjectDto.description;

    return this.repo.update(id, newEntity);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
