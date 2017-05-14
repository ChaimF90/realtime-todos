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