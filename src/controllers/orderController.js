
import OrderService from '../services/order.service.js'


async function createOrder(req, res, next){
  try{
    let order = req.body;

    if(!order.client || !order.product || !order.price){
      throw new Error('Nome do cliente, produto e preço são obrigatórios')
    }

    order = await OrderService.createOrder(order);
    res.send(order)

  } catch(err){

  }
}

async function getOrders(req, res, next){
  try{
    let data = await OrderService.getOrders()
    res.send(data);

  } catch( err ){
      next(err);
  }
}

async function getProductsReport(req, res){

}

async function getOrdersByClient(req, res){

}

async function getOrderById(req, res, next){
  try{
    let data = await OrderService.getOrder(req.params.id)
    res.send(data);

  } catch( err ){
      next(err);
  }

}

async function getOrdersByProduct(req, res){

}

async function updateOrder(req, res){

}

async function orderStatusUpdate(req, res){

}

async function deleteOrder(req, res, next){

  if(!req.params.id){
    throw new Error('An order id is mandatory!')
  }

  try{
    let data = await OrderService.deleteOrder(req.params.id)
    res.json(data);

  } catch( err ){
      next(err);
  }

}

export default {
  createOrder,
  getOrders,
  getProductsReport,
  getOrdersByClient,
  getOrdersByProduct,
  getOrderById,
  updateOrder,
  orderStatusUpdate,
  deleteOrder
}