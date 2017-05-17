import knex from './config';
import { Task } from '../appTypes/interfaces';

async function addTask(payload: Task) {
    return await knex('tasks').insert(payload);
}

async function getAllTasks() {
    return await knex('tasks').select().where('completed', false);
}

async function setTaskProgress(id: number) {
    return await knex('tasks').where('id', id).update({inProgress: true});
}

async function completeTask(id: number) {
    return await knex('tasks').where('id', id).update({completed: true, inProgress: false});
}

export {
    addTask,
    getAllTasks,
    setTaskProgress,
    completeTask
}