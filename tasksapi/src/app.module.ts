import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
config();

const MONGODB_CONNECT_URI =
  process.env.MONGODB_CONNECT_URI || 'mongodb://127.0.0.1:27017/taskdb';
@Module({
  // imports: [MongooseModule.forRoot('mongodb://localhost/taskdb'), TasksModule],
  imports: [MongooseModule.forRoot(MONGODB_CONNECT_URI), TasksModule],

  controllers: [],
  providers: [],
})
export class AppModule {}
