import * as React from 'react';
import { withRouter } from 'react-router-dom';
import TasksTable from './TasksTable';
import { TasksPageState } from '../../Types/interfaces';
import axios from 'axios';
import * as io from 'socket.io-client';
import { Task, SocketResponse } from '../../../../appTypes/interfaces';
import NewTaskModal from './NewTaskModal';

class TasksPage extends React.Component<any, TasksPageState> {
    private socket: any = {};
    constructor() {
        super();
        this.state = {
            tasks: [],
            hasAccess: false,
            currentTask: 0,
            task: {
                title: '',
                content: '',
                completed: false,
                inProgress: false
            },
            showModal: false
        }
        this.updateTaskProgress = this.updateTaskProgress.bind(this);
        this.completeTask = this.completeTask.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.addNewtask = this.addNewtask.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
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
            this.setState({ tasks: response.tasks });
        })
        this.socket.on('task assigned', (currentTask: number) => {
            this.setState({ currentTask });
        })
    }

    updateTaskProgress(id: number) {
        this.socket.emit('update progress', id);
    }

    completeTask(id: number) {
        this.socket.emit('complete task', id);
    }

    changeHandler(e: any) {
        let task = this.state.task;
        task[e.target.name] = e.target.value;
        this.setState({ task });
    }

    addNewtask() {
        this.socket.emit('new task', Object.assign({}, this.state.task));
        this.clearForm();
    }

    clearForm() {
        let task = this.state.task;
        task.title = '';
        task.content = '';
        this.setState({ task, showModal: false });
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
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
        let modal;
        if (this.state.showModal) {
            modal =
                <NewTaskModal
                    cancel={this.toggleModal}
                    saveTask={this.addNewtask}
                    changeHandler={this.changeHandler}
                    task={this.state.task}
                    socket={this.socket} />
        }
        return (
            <div>
                {modal}
                <button onClick={this.toggleModal} className="btn btn-default">Add Task</button>
                {table}
            </div>
        )
    }
}

export default withRouter(TasksPage);