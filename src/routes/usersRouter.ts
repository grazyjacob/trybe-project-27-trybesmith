import { Router } from 'express';

import usersController from '../controllers/usersController';

const router = Router();

router.post('/users', usersController);

export default router;