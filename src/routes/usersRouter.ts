import { Router } from 'express';

import * as usersController from '../controllers/usersController';

const router = Router();

router.post('/users', usersController.create);
// router.get('/products', productsController.getAllProducts);

export default router;