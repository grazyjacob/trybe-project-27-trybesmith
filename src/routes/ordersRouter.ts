import { Router } from 'express';

import * as ordersController from '../controllers/ordersController';

const router = Router();

router.get('/orders', ordersController.getAllOrders);

export default router;