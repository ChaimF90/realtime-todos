require('dotenv').config();
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
const app = express();
const server = http.createServer(app);
import * as socket from 'socket.io';
const io = socket(server);

import { checkToken } from './tokenCheck';

import { authRouter } from './authRoutes';
import { router } from './routes';

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/auth', authRouter);
app.use('/api', checkToken, router);

io.on('connection', socket => {
    console.log('we have a connection');
})

server.listen(8000, () => console.log('server is running on port 8000'));
