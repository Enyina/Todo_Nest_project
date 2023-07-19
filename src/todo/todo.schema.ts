import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop({ type: String })
  task: string;

  @Prop({ type: String })
  timelimit: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
