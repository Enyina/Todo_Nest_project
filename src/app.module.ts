import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://cranell:cranell@officialwork.nqbjgvi.mongodb.net/moshop?retryWrites=true&w=majority',
    ),
    TodoModule,
  ],
})
export class AppModule {}
