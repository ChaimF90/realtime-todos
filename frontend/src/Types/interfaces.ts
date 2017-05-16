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
}

export interface TasksPageState {
    tasks: Array<Task>;
}








