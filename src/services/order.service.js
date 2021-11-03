/* This layer contains the business rules */

import OrderRepository from '../repositories/order.repository.js';


async function createOrder(order){
  return await OrderRepository.insertOrder(order);
}

async function getOrders(){
    return await OrderRepository.getOrders();
 }

async function getOrder(id){
   return await OrderRepository.getOrderById(id);
 } 

async function deleteOrder(id){
  return await OrderRepository.removeOrder(id)
}

async function updateOrder(order){
  return await OrderRepository.updateOrder(order)
}

async function updateOrderStatus(order){
  return await OrderRepository.updateOrderStatus(order)
}

async function getOrdersByClient(id){
  return await OrderRepository.getOrdersByClient(id)
}

async function getOrdersByProduct(name){
  return await OrderRepository.getOrdersByProduct(name)
}

async function getProductsReport(){
  return await OrderRepository.getProductsReport()
}
 
 
 export default {
   createOrder,
   getOrders,
   getOrder,
   deleteOrder,
   updateOrder,
   updateOrderStatus,
   getOrdersByClient,
   getOrdersByProduct,
   getProductsReport
 }