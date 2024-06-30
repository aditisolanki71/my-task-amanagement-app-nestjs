import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

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
  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Task {
    console.log('body is', title, description);
    return this.tasksService.createTask(title, description);
  }
}
