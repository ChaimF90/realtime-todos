import * as React from 'react';
import { RegisterProps } from '../../Types/interfaces';
import Input from '../GenericComponents/Input';
import Button from '../GenericComponents/Button';
import './auth.css';
import { Link } from 'react-router-dom';

export default function AuthForm(props: RegisterProps) {
    return (
        <div className="modal-dialog">
            <div className="loginmodal-container">
                <h1>{props.headerText}</h1>
                <br />
                <div>
                    <input
                    value={props.user.username}
                    onChange={props.onChange} 
                    type="text" 
                    name="username" 
                    placeholder="Username" />
                    <input 
                    onChange={props.onChange}
                    value={props.user.password}
                    type="password" 
                    name="password" 
                    placeholder="Password" />
                    <button onClick={props.submitForm} className="btn btn-primary">{props.buttonText}</button>
                </div>

                <div className="login-help">
                    <Link to={props.linkUrl}>{props.linkText}</Link>
                </div>
            </div>
        </div>
    )
}