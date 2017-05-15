import '../declaredModules/modules';
import * as express from 'express-promise-router';
const router = express();

import tasks from './tasks';
router.use('/tasks', tasks);

export { router }