import * as React from 'react';
import { RegisterProps } from '../../Types/interfaces';
import Input from '../GenericComponents/Input';
import Button from '../GenericComponents/Button';

export default function AuthForm(props: RegisterProps) {
    return (
        <div>
            <Input 
            name="username" 
            value={props.user.username} 
            onChange={props.onChange} 
            placeholder="Username"
            type="text" />
            <br />
            <Input
            type="password" 
            name="password" 
            value={props.user.password} 
            onChange={props.onChange} 
            placeholder="Password" />
            <br />
            <Button onClick={props.submitForm} text="Register" type="Primary" />
        </div>
    )
}