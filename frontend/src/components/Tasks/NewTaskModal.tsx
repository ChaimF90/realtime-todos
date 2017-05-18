import * as React from 'react';
import { NewTaskProps } from '../../Types/interfaces';
import './modal.css';

export default function NewTaskModal(props: NewTaskProps) {
    return (
        <div className="custom-modal">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                name="title"
                onChange={props.changeHandler} 
                type="text" 
                value={props.task.title}
                className="form-control" 
                id="title" 
                placeholder="Title" />
            </div>
            <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea 
                name="content"
                onChange={props.changeHandler}
                type="text"
                value={props.task.content} 
                className="form-control" 
                id="content" 
                placeholder="Content" />
            </div>
            <button onClick={props.saveTask} type="submit" className="btn btn-default">Submit</button>
        </div>
    )
}