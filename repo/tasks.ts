import knex from './config';
import { Task } from '../appTypes/interfaces';

async function addTask(payload: Task) {
    return await knex('tasks').insert(payload);
}

async function getAllTasks() {
    return await knex('tasks').select();
}

export {
    addTask,
    getAllTasks
}