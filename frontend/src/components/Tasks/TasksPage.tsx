import * as React from 'react';
import { withRouter } from 'react-router-dom';
import TasksTable from './TasksTable';
import { TasksPageState } from '../../Types/interfaces';
import axios from 'axios';
import * as io from 'socket.io-client';
import { Task, SocketResponse } from '../../../../appTypes/interfaces';

class TasksPage extends React.Component<any, TasksPageState> {
    private socket: any = {};
    constructor() {
        super();
        this.state = {
            tasks: [],
            hasAccess: false,
            currentTask: 0
        }
        this.updateTaskProgress = this.updateTaskProgress.bind(this);
        this.completeTask = this.completeTask.bind(this);
    }

    async componentDidMount() {
        try {
            const token = localStorage.getItem('tasksToken');
            const config = {
                headers: { 'x-access-token': token }
            };
            let response = await axios.get('/api/tasks/tasks', config);
            this.setState({ hasAccess: true, tasks: response.data }, () => {
                this.handleSocketConnection();
            });
        } catch (error) {
            if (error.response.status === 403) {
                this.props.history.push('/login');
            }
        }
    }

    handleSocketConnection() {
        const token = localStorage.getItem('tasksToken') as string
        this.socket = io.connect('/');
        this.socket.emit('retrieve token', token);
        this.socket.on('all tasks', (response: SocketResponse) => {
            this.setState({ tasks: response.tasks, currentTask: response.currentTask });
        })
        this.socket.on('current task', (currentTask: number) => {
            this.setState({ currentTask });
        })
    }

    updateTaskProgress(id: number) {
        this.socket.emit('update progress', id);
    }

    completeTask(id: number) {
        this.socket.emit('complete task', id);
    }

    render() {
        let table;
        if (this.state.hasAccess) {
            table =
                <TasksTable
                    completeTask={this.completeTask}
                    updateProgress={this.updateTaskProgress}
                    tasks={this.state.tasks}
                    currentTask={this.state.currentTask} />
        }
        return (
            <div className="container">
                {table}
            </div>
        )
    }
}

export default withRouter(TasksPage);