require('dotenv').config();
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
const app = express();
const server = http.createServer(app);
import * as socket from 'socket.io';
const io = socket(server);
import * as db from './repo';
import { Task } from './appTypes/interfaces';

import { checkToken, addUserIdToSocket } from './tokenCheck';

import { authRouter } from './authRoutes';
import { router } from './routes';

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/auth', authRouter);
app.use('/api', checkToken, router);

io.on('connection', socket => {
    socket.on('retrieve token', (token: string) => {
        addUserIdToSocket(token, async decoded =>  {
            socket.userId = decoded.userId
            let user = await db.users.getUserById(socket.userId);
            socket.emit('current task', user.currentTask);
            socket.emit('task assigned', user.currentTask);
        });
    })
    socket.on('update progress', async (id: number) => {
        await db.tasks.setTaskProgress(id);
        await db.users.assignTaskToUser(socket.userId, id);
        let user = await db.users.getUserById(socket.userId);
        let tasks = await db.tasks.getAllTasks();
        io.sockets.emit('all tasks', {tasks});
        socket.emit('task assigned', user.currentTask);
    })
    socket.on('complete task', async (id: number) => {
        await db.tasks.completeTask(id);
        await db.users.assignTaskToUser(socket.userId, 0);
        let user =  await db.users.getUserById(socket.userId);
        let tasks = await db.tasks.getAllTasks();
        io.sockets.emit('all tasks', {tasks});
    })
    socket.on('new task', async (task: Task) => {
        await db.tasks.addTask(task);
        let tasks = await db.tasks.getAllTasks();
        let user = await db.users.getUserById(socket.userId);
        io.sockets.emit('all tasks', {tasks})
    })
})

server.listen(8000, () => console.log('server is running on port 8000'));



