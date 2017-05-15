import '../declaredModules/modules';
import * as express from 'express-promise-router';
const router = express();

import * as db from '../repo';
import { Request, Response } from 'express'

router.post('/addTask', async (req: Request, res: Response) => {
    let id = await db.tasks.addTask(req.body);
    res.json(id);
});

router.get('/tasks', async (req: Request, res: Response) => {
    let tasks = await db.tasks.getAllTasks();
    res.json(tasks);
});

export default router;

