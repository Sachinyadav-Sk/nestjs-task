import { Body, Controller,Get ,Post } from '@nestjs/common';
import { TaskService } from './task.service';
import{  Tasks , } from './Tasks.model';

@Controller('task')
export class TaskController {
    constructor(private taskservice : TaskService){}
    
@Get()

    getAlltask (): Tasks [] {
        return this.taskservice.getAlltask();
    }
@Post()
    createtask(@Body() body) {
        console.log('body',body);

    }
}
