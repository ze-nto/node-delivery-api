import { Router } from 'express';
import orderController from '../controllers/orderController.js';

const router = Router();

//Creates a order
router.post('/', orderController.createOrder)

// Return all orders
router.get('/', orderController.getOrders)

// Return an specified order
router.get('/:id', orderController.getOrderById)

// Update an specied order
router.put('/:id', orderController.updateOrder)

// Update the delivery status of an specied order
router.patch('/:id/status', orderController.orderStatusUpdate)

// Delete an specified order
router.delete('/:id', orderController.deleteOrder)

// router.get('/:client', orderController.getOrdersByClient)
// router.get('/:product', orderController.getOrdersByProduct)
// router.get('/', orderController.getProductsReport)

//error Handling
router.use((err, req, res, next) => {
  res.status(404).send({ error: err.message })
})

export default router;

