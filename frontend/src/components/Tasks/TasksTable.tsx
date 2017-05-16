import * as React from 'react';
import { TableProps } from '../../Types/interfaces';
import { Task } from '../../../../appTypes/interfaces';

export default function TasksTable(props: TableProps) {
    function createRow(t: Task, i: number) {
        return (
            <tr key={i}>
                <td>{t.title}</td>
                <td>{t.content}</td>
                <td>{t.inProgress}</td>
                <td></td>
            </tr>
        )
    }

    return (
        <table className="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Content</th>
                    <th>In Progress</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.tasks.map((t, i) => createRow(t, i))}
            </tbody>
        </table>
    )
}
