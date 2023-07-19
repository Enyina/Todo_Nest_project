import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() body: any | any[]) {
    if (Array.isArray(body)) {
      const todos = await this.todoService.createMultiple(body);
      return { data: todos };
    } else {
      const todo = await this.todoService.create(body);
      return { data: todo };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const updatedTodo = await this.todoService.update(id, body);
    return { data: updatedTodo };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.todoService.delete(id);
    return { data: null };
  }
}
