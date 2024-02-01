import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todos.dto';
import { TodosService } from './todos.service';

@Controller('ccc')
export class TodosController {
  userService: any;
  constructor(private readonly todosService: TodosService) {}
  @Post('a')
  create(@Body() dto: CreateTodoDto) {
    return this.todosService.create(dto);
  }

  @Get('b')
  findMany() {
    return this.todosService.findMany();
  }

  @Put(':id')
  update(@Body() dto: CreateTodoDto,@Param('id') id: number) {
    return this.todosService.update(id, dto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    try {
      await this.todosService.remove(id);
      return { message: 'User deleted successfully' };
    } catch (error) {
      console.error(error);
      return { message: 'Error deleting user' };
    }
  }
}
