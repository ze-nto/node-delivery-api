import { Router } from 'express';
import orderController from '../controllers/orderController.js';

const router = Router();


router.post('/', orderController.createOrder)
router.get('/', orderController.getOrders)
router.get('/', orderController.getProductsReport)
router.get('/:client', orderController.getOrdersByClient)
router.get('/:product', orderController.getOrdersByProduct)
router.get('/:id', orderController.getOrderById)
router.put('/:id', orderController.updateOrder)
router.put('/:id/status', orderController.orderStatusUpdate)
router.delete('/:id', orderController.deleteOrder)

export default router;

