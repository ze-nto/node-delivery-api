import { promises as fs } from 'fs';
const { readFile, writeFile } = fs;

async function insertOrder(order){
  const data = JSON.parse(await readFile(global.fileName))
  
  order = {
    id: data.nextId++,
    cliente: order.client,
    produto: order.product,
    valor: order.price,
    entregue: order.isDelivered,
    timestamp: new Date()
  }

  data.pedidos.push(order);
  await writeFile(global.fileName, JSON.stringify(data, null, 2))
  return order;
  

}

async function getOrders(){
  const data = JSON.parse(await readFile(global.fileName));
  return data.pedidos;
}

async function getOrderById(id){
  const data = JSON.parse(await readFile(global.fileName)).pedidos
  const order = data.find(order => order.id === parseInt(id))

if(!order){
    throw new Error('Registro não encontrado');
  }else{
    return order;
  }
}

export default {
  insertOrder,
  getOrders,
  getOrderById
}