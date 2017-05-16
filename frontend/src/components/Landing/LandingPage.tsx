import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { LandingState } from '../../Types/interfaces';
import Welcome from './Welcome';

class LandingPage extends React.Component<any, LandingState> {
    constructor() {
        super();
        this.state = {
            hasToken: false
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('tasksToken');
        if(token) {
            this.setState({hasToken: true});
        }
    }

    render() {
        let renderThis;
        if(this.state.hasToken) {
            renderThis = <Redirect to="/tasks" />
        } else {
            renderThis = <Welcome />
        }
        return (
            <div>
                {renderThis}
            </div>
        )
    }
}

export default LandingPage;