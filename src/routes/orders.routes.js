import { Router } from 'express';
import orderController from '../controllers/order.controller.js';

const router = Router();


//Creates a order
router.post('/orders', orderController.createOrder)

// Return all orders
router.get('/orders', orderController.getOrders)

// Return an specified order
router.get('/orders/:id', orderController.getOrderById)

// Update an specied order
router.put('/orders/:id', orderController.updateOrder)

// Update the delivery status of an specied order
router.patch('/orders/:id', orderController.updateOrderStatus)

// Delete an specified order
router.delete('/orders/:id', orderController.deleteOrder)

// Returns the total value of a specified client orders
router.get('/orders/:id/total', orderController.getOrdersByClient)

// Returns total of specied product ordered
router.get('/product', orderController.getOrdersByProduct)

//Returns the best sellers products
router.get('/product/bestSellers', orderController.getProductsReport)

//error Handling
router.use((err, req, res, next) => {
  res.status(404).send({ error: err.message })
})

export default router;

