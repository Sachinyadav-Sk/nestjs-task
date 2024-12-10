import { TaskService } from './task.service';
export declare class TaskController {
    private taskservice;
    constructor(taskservice: TaskService);
    get value(): string;
    getAlltask(): any[];
}
