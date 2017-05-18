import { User, Task } from '../../../appTypes/interfaces';
type ButtonType = "Primary" | "Secondary";

export interface InputType {
    name: string;
    value: any;
    onChange: (e: any) => void;
    placeholder: string;
    type: string;
}

export interface RegisterState {
    user: User;
    isRegister: boolean;
}

export interface RegisterProps {
    user: User;
    onChange: (e: any) => void;
    submitForm: () => void;
    headerText: string;
    linkText: string;
    buttonText: string;
    linkUrl: string;
}

export interface ButtonTypeProps {
    text: string;
    type: ButtonType;
    onClick: () => void;
}

export interface LandingState {
    hasToken: boolean;
}

export interface TableProps {
    tasks: Array<Task>;
    updateProgress: (id: number) => void;
    completeTask: (id: number) => void;
    currentTask: number;
}

export interface TasksPageState {
    tasks: Array<Task>;
    hasAccess: boolean;
    currentTask: number;
    task: Task;
    showModal: boolean;
}

export interface NewTaskProps {
    socket: any;
    task: Task;
    changeHandler: (e: any) => void;
    saveTask: () => void;
    cancel: () => void;
}





