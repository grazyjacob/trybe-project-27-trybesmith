import { Router } from 'express';
import * as productsController from '../controllers/productsController';
import { validateName, validateAmount } from '../middlewares/productValidate';

const router = Router();

router.post('/products', validateName, validateAmount, productsController.create);
router.get('/products', productsController.getAllProducts);

export default router;