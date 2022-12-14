import { Router } from 'express';

import * as productsController from '../controllers/productsController';

const router = Router();

router.post('/products', productsController.create);

export default router;