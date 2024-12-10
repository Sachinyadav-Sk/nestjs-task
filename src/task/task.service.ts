import { Injectable } from '@nestjs/common';
import{  Tasks } from './Tasks.model';



@Injectable()
export class TaskService {
    private task : Tasks [] =[];
    getAlltask(){
        return this.task;
    }

        } ;


    
  




