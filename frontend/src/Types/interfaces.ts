import { User } from '../../../appTypes/interfaces';
type ButtonType = "Primary" | "Secondary";

export interface InputType {
    name: string;
    value: any;
    onChange: (e: any) => void;
    placeholder: string;
    type: string;
}

export interface RegisterState {
    user: User
}

export interface RegisterProps {
    user: User;
    onChange: (e: any) => void;
}

export interface ButtonTypeProps {
    text: string;
    type: ButtonType;
}

export interface AppState {
    hasToken: boolean;
}