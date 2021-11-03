
import OrderService from '../services/order.service.js'


async function createOrder(req, res, next){
  try{
    let order = req.body;

    if(!order.cliente || !order.produto || !order.valor){
      throw new Error('Nome do cliente, produto e preço são obrigatórios')
    }

    order = await OrderService.createOrder(order);
    res.send(order)

  } catch(err){
    next(err)
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


async function getOrderById(req, res, next){
  try{
    let data = await OrderService.getOrder(req.params.id)
    res.send(data);

  } catch( err ){
      next(err);
  }
}


async function updateOrder(req, res, next){
  try{
    let order = {id: parseInt(req.params.id), ...req.body}
    console.log(order)
    if(!order.cliente || !order.produto || !order.valor || !order.entregue){
      throw new Error('Nome do cliente, produto e preço são obrigatórios')
    }

    const response = await OrderService.updateOrder(order);
    res.send(response)

  } catch(err){
    next(err)
  }

}

async function deleteOrder(req, res, next){

  try{
    let data = await OrderService.deleteOrder(req.params.id)
    res.json(data);

  } catch( err ){
      next(err);
  }

}

async function updateOrderStatus(req, res, next){
  
  try{
    let order = {id: parseInt(req.params.id), ...req.body}

    if(!order){
      throw new Error('Informe o status a ser atualizado');
    }

    const response = await OrderService.updateOrderStatus(order);
    res.send(response)

  } catch(err){
    next(err)
  }

}

async function getOrdersByClient(req, res, next){
  try{
    let data = await OrderService.getOrdersByClient(req.params.id)
    res.send(data);

  } catch( err ){
      next(err);
  }
}

async function getOrdersByProduct(req, res, next){
  try{
    let data = await OrderService.getOrdersByProduct(req.query.name)
    res.send(data);

  } catch( err ){
      next(err);
  }
}

async function getProductsReport(req, res, next){
  try{
    let data = await OrderService.getProductsReport(req.query.name)
    res.send(data);

  } catch( err ){
      next(err);
  }
}

export default {
  createOrder,
  getOrders,
  getOrdersByClient,
  getOrdersByProduct,
  getProductsReport,
  getOrderById,
  updateOrder,
  updateOrderStatus,
  deleteOrder
}