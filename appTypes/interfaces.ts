export interface User {
    id?: number;
    username: string;
    password: string;
    currentTask?: number;
}

export interface Login {
    username: string;
    password: string;
}

export interface Task {
    id?: number;
    title: string;
    content: string;
    completed: boolean;
    inProgress: boolean;
}