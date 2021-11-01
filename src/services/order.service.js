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
 
 
 export default {
   createOrder,
   getOrders,
   getOrder
 }