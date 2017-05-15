require('dotenv').config();
import * as express from 'express';
import * as bodyParser from 'body-parser';
const app = express();

import { authRouter } from './authRoutes';
import { router } from './routes';

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/auth', authRouter);
app.use('/api', router);

app.get('/', (req, res) => {
    res.json('Testing');
})


app.listen(8000, () => console.log('server is running on port 8000'));
