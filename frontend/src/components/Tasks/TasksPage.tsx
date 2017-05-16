import * as React from 'react';
import { withRouter } from 'react-router-dom';
import TasksTable from './TasksTable';
import { TasksPageState } from '../../Types/interfaces';
import axios from 'axios';
import * as io from 'socket.io-client';

class TasksPage extends React.Component<any, TasksPageState> {
    constructor() {
        super();
        this.state = {
            tasks: [],
            hasAccess: false,
            socket: {}
        }
    }

    async componentDidMount() {
        try {
            const token = localStorage.getItem('tasksToken');
            const config = {
                headers: {'x-access-token': token}
            };
            let response = await axios.get('/api/tasks/tasks', config);
            this.setState({hasAccess: true, tasks: response.data}, () => {
                this.handleSocketConnection();
            });
        } catch (error) {
            if(error.response.status === 403) {
                this.props.history.push('/login');
            }
        }
    }

    handleSocketConnection() {
        const socket = io.connect('/');
    }

    render() {
        let table;
        if(this.state.hasAccess) {
            table = <TasksTable tasks={this.state.tasks} />
        }
        return (
            <div className="container">
                {table}
            </div>
        )
    }
}

export default withRouter(TasksPage);