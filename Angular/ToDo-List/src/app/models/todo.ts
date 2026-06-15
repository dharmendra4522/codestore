export enum Status {
    pending = 'pending',
    complete = 'complete'
}

export interface Todo {
    id: string;
    title: string;
    status: Status;
}
