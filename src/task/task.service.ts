import { Injectable } from '@nestjs/common';
import{  Tasks, TasksStatus } from './Tasks.model';
import { createtaskdto } from './DTO/Create-task.dto';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class TaskService {
    
    private task : Tasks [] =[];

getAlltask(): Tasks [] {
        return this.task;
    }
    creattask(createtaskdto:createtaskdto): Tasks{
        const{tital,description} =createtaskdto;

        const task : Tasks = {
            id :uuidv4(),
            tital,
            description,
            Status: TasksStatus.open,


        }
        this.task.push(task);
        return task;

    }
 } 


    
  




