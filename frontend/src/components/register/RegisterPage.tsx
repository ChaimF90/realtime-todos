import * as React from 'react';
import { RegisterState } from '../../Types/interfaces'
import RegisterForm from './RegisterForm';

export default class RegisterPage extends React.Component<any, RegisterState > {
    constructor() {
        super();
        this.state =  {
            user: {
              username: '',
              password: ''  
            }
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e: any) {
        let user = this.state.user;
        user[e.target.name] = e.target.value;
        this.setState({user});
    }

    render() {
        return (
            <div className="register">
                <RegisterForm user={this.state.user} onChange={this.changeHandler} />
            </div>
        )
    }
}