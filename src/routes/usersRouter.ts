import { Router } from 'express';

import usersController from '../controllers/usersController';
import { validateLevel, validateUsername,
  validateVocation, validatePassword } from '../middlewares/userValidate';

const router = Router();

router.post(
  '/users', 
  validateUsername,
  validateLevel,
  validateVocation,
  validatePassword,
  usersController,
);

export default router;