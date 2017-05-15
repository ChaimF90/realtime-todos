import '../declaredModules/modules';
import * as express from 'express-promise-router';
const authRouter = express();

import userRouter from './users';
authRouter.use('/users', userRouter);

export { authRouter }