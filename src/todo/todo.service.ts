import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  async create(todo: Todo): Promise<Todo> {
    const createdTodo = new this.todoModel(todo);
    return createdTodo.save();
  }

  async createMultiple(todos: Todo[]): Promise<Todo[]> {
    const createdTodos = await this.todoModel.create(todos);
    return createdTodos;
  }

  async update(id: string, todo: Todo): Promise<Todo> {
    const updatedTodo = await this.todoModel.findByIdAndUpdate(id, todo, {
      new: true,
    });
    return updatedTodo;
  }

  async delete(id: string): Promise<void> {
    await this.todoModel.findByIdAndDelete(id);
  }
}
