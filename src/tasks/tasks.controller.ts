import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDTO } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // we want this method to call whenever any get req comes
  // that is why we are using Get decorator
  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  //1
  //   @Post()
  //   createTask(@Body() body) {
  //     console.log('body is', body);
  //   }

  //2
  //   @Post()
  //   createTask(
  //     @Body('title') title: string,
  //     @Body('description') description: string,
  //   ): Task {
  //     console.log('body is', title, description);
  //     return this.tasksService.createTask(title, description);
  //   }

  //3 DTO
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDTO): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }
}
