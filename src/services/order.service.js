/* This layer  contains the business rules */

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
 
 
 export default {
   createOrder,
   getOrders,
   getOrder,
   deleteOrder
 }