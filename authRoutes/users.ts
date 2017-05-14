import '../declaredModules/modules';
import * as express from 'express-promise-router';
import * as jwt from 'jsonwebtoken';
const router = express();

import * as db from '../repo';
import { Request, Response } from 'express'

router.post('/register', async (req: Request, res: Response) => {
    let id = await db.users.registerUser(req.body);
    res.json(id);
});

router.post('/login', async (req: Request, res: Response) => {
    let user = await db.users.loginUser(req.body);
    if(user) {
        const token = jwt.sign('foobar' ,process.env.AUTH_SCRET, {
            expiresIn: 60*60*24
        });
        res.json({
            success: true,
            token
        });
    } else {
        res.status(403).send('Invalid Login');
    }
});

export default router;

