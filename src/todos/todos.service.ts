import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todos.dto';
import { Todo } from './todos.entity';

@Injectable()
export class TodosService {
  async remove(id: number) {
     await this.todoRepository.delete(id);
  }
  


  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  async create(dto: CreateTodoDto) {
    const todo = this.todoRepository.create(dto);

    return await this.todoRepository.save(todo);
  }

  findMany() {
    return this.todoRepository.find();
  }

  async update(id: number, dto: CreateTodoDto) {
    return await this.todoRepository.update(id,dto)
  }
}
