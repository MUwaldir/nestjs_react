import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}
  @Get()
  async findAll() {
    try {
      const result = await this.taskService.findAll();
      console.log('result ' + result);
      return result;
    } catch (error) {
      console.error('Error in findAll():', error);
      throw error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const task = await this.taskService.findOne(id);
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  @Post()
  async create(@Body() body: CreateTaskDto) {
    try {
      return await this.taskService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Error Task created');
      }
      throw error;
    }
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTask: UpdateTaskDto) {
    const Task = await this.taskService.update(id, updateTask);
    if (!Task) throw new NotFoundException('Task not found');
    return Task;
  }
}
