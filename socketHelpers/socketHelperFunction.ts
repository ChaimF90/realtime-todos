import * as db from '../repo';

async function assignTaskToUser(socket: SocketIO.Socket) {
    let user = await db.users.getUserById(socket.userId);
    socket.emit('task assigned', user.currentTask);
}

async function updateTaskProgress(socket: SocketIO.Socket, id: number, io: SocketIO.Server) {
    await db.tasks.setTaskProgress(id);
    await db.users.assignTaskToUser(socket.userId, id);
    let user = await db.users.getUserById(socket.userId);
    let tasks = await db.tasks.getAllTasks();
    io.sockets.emit('all tasks', { tasks });
    socket.emit('task assigned', user.currentTask);
}

export {
    assignTaskToUser,
    updateTaskProgress
}