import { Body, Controller,Get ,Post } from '@nestjs/common';
import { TaskService } from './task.service';
import{  Tasks , } from './Tasks.model';
import { createtaskdto } from './DTO/Create-task.dto';

@Controller('task')
export class TaskController {
    constructor(private taskservice : TaskService){}
    
@Get()

    getAlltask (): Tasks [] {
        return this.taskservice.getAlltask();
    }
@Post()
createTask(@Body() createTaskDto: createtaskdto): Tasks {
    return this.taskservice.creattask(createTaskDto );
  }
  

    }

