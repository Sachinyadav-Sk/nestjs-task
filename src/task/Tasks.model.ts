export interface Tasks{
    id: String;
    tital: String;
    description: String;
    Status:TasksStatus;
}

export enum TasksStatus{
    open='open',
    in_prograce = 'in_prograce',
    done = 'done'
}


