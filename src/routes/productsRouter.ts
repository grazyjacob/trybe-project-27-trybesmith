import { Router } from 'express';

import * as productsController from '../controllers/productsController';

const router = Router();

router.post('/products', productsController.create);
router.get('/products', productsController.getAllProducts);

export default router;