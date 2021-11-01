import { Router } from 'express';
import orderController from '../controllers/orderController.js';

const router = Router();

//Creates a order
router.post('/', orderController.createOrder)

// Return all orders
router.get('/', orderController.getOrders)
// router.get('/:client', orderController.getOrdersByClient)
// router.get('/:product', orderController.getOrdersByProduct)
// router.get('/', orderController.getProductsReport)
router.get('/:id', orderController.getOrderById)
router.put('/:id', orderController.updateOrder)
router.patch('/:id/status', orderController.orderStatusUpdate)
router.delete('/:id', orderController.deleteOrder)

//error Handling
router.use((err, req, res, next) => {
  res.status(404).send({ error: err.message })
})

export default router;

