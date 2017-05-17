import knex from './config';
import * as authHelpers from './authHelpers';
import { User, Login } from '../appTypes/interfaces';

async function registerUser(payload: User) {
    let hashedPassword = await authHelpers.hashPassword(payload.password);
    payload.password = hashedPassword;
    return await knex('users').insert(payload);
}

async function loginUser(login: Login) :Promise<User>{
    let user = await knex('users').select().where('username', login.username).first() as User;
    if(user) {
        let validPassowrd = await authHelpers.comparePassword(user.password, login.password);
        if(validPassowrd) {
            return user;
        }
    }
}

async function assignTaskToUser(userId: number, taskId: number) {
    return await knex('users').where('id', userId).update({currentTask: taskId});
}

async function getUserById(id: number) :Promise<User> {
    return await knex('users').where('id', id).select().first();
}


export {
    registerUser, 
    loginUser,
    assignTaskToUser,
    getUserById
}

