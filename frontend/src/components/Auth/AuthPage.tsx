import * as React from 'react';
import { RegisterState } from '../../Types/interfaces'
import AuthForm from './AuthForm';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

type pathname = "register" | "login";

class AuthPage extends React.Component<any, RegisterState > {
    constructor() {
        super();
        this.state =  {
            user: {
              username: '',
              password: ''  
            },
            isRegister: true
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount() {
        let pathname: pathname = this.props.location.pathname.replace("/", "");
        if(pathname === 'login') {
            this.setState({isRegister: false});
        } 
    }

    changeHandler(e: any) {
        let user = this.state.user;
        user[e.target.name] = e.target.value;
        this.setState({user});
    }

    redirect(route: string) {
        this.props.history.push(route);
    }

    async submitForm() {
        let response;
        if(this.state.isRegister) {
            response = await axios.post('/auth/users/register', this.state.user);
            this.redirect('/login');
        } else {
            response = await axios.post('/auth/users/login', this.state.user);
            localStorage.setItem('tasksToken', response.data.token);
            this.redirect('/tasks');
        }
    }

    render() {
        return (
            <div className="register">
                <AuthForm
                submitForm={this.submitForm} 
                user={this.state.user} 
                onChange={this.changeHandler} />
            </div>
        )
    }
}

export default withRouter(AuthPage);