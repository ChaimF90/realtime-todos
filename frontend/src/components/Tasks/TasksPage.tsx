import * as React from 'react';
import { withRouter } from 'react-router-dom';
import TasksTable from './TasksTable';
import { TasksPageState } from '../../Types/interfaces';
import axios from 'axios';

class TasksPage extends React.Component<any, TasksPageState> {
    constructor() {
        super();
        this.state = {
            tasks: []
        }
    }

    async componentDidMount() {
        try {
            let response = await axios.get('/api/tasks/tasks');
        } catch (error) {
            console.log(error.response);
        }
    }
    render() {
        return (
            <div className="container">
                <TasksTable tasks={this.state.tasks} />
            </div>
        )
    }
}

export default withRouter(TasksPage);