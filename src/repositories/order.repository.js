import { promises as fs } from 'fs';
const { readFile, writeFile } = fs;

async function insertOrder(order){
  const data = JSON.parse(await readFile(global.fileName))
  
  order = {
    id: data.nextId++,
    cliente: order.cliente,
    produto: order.produto,
    valor: order.valor,
    entregue: false,
    timestamp: new Date()
  }
  

  data.pedidos.push(order);
  await writeFile(global.fileName, JSON.stringify(data, null, 2))
  return order;
  

}

// Returns all orders
async function getOrders(){
  const data = JSON.parse(await readFile(global.fileName));
  return data.pedidos;
}


//Returns specified order
async function getOrderById(id){
  const data = JSON.parse(await readFile(global.fileName)).pedidos
  const order = data.find(order => order.id === parseInt(id))

  if(!order){
      throw new Error('Pedido não encontrado');
    }else{
      return order;
    }
}

//Delete specified order
async function removeOrder(id){

  const data = JSON.parse( await readFile(global.fileName));
  const order = await getOrderById(id);

  if(!order) throw new Error('Order not found');

  data.pedidos = data.pedidos.filter(
      order => order.id !== parseInt(id));
  
  await writeFile(global.fileName, JSON.stringify(data, null, 2));
  return `Pedido ${id} deletado com sucesso`

} 


async function updateOrder(order){
  const data = JSON.parse(await readFile(global.fileName));
  const index = data.pedidos.findIndex( item =>  {
    return item.id === order.id});
  
  if(index === -1){
    throw new Error('Order not found');
  }
  
  data.pedidos[index] = {...order}
  
  await writeFile(global.fileName, JSON.stringify(data, null, 2))
  return data.pedidos[index]; 
}

async function updateOrderStatus(order){
  const data = JSON.parse(await readFile(global.fileName));
  const index = data.pedidos.findIndex( item =>  {
    return item.id === order.id});
  
  if(index === -1){
    throw new Error('Order not found');
  }
  
  data.pedidos[index].entregue = order.entregue;
  
  await writeFile(global.fileName, JSON.stringify(data, null, 2))
  return data.pedidos[index]; 
}

async function getOrdersByClient(id){
      const data = JSON.parse(await readFile(global.fileName))
      const order = data.pedidos.find(order => order.id === parseInt(id))
    
      if(!order){
        throw new Error('Pedido não encontrado');
      }
      
      const count = data.pedidos.filter(item => item.cliente === order.cliente && item.entregue)
      const total = count.reduce((total, item) => total + item.valor, 0);
  
      return {total}

}

async function getOrdersByProduct(name){
      const data = JSON.parse(await readFile(global.fileName))
      
      const orders = data.pedidos.filter(item => item.produto === name && item.entregue)

    
      if(orders.length == 0){
        throw new Error('Produto não encontrado');
      }
      
      const total = orders.reduce((total, item) => total + item.valor, 0);
  
      return {total}
}

async function getProductsReport(){
  const data = JSON.parse(await readFile(global.fileName))
  const products = new Set();
  data.pedidos.forEach(element => {
    products.add(element.produto)
  });
  console.log(products)
  const response = [];

  for(let product of products){
    let item = data.pedidos.filter(item => item.produto === product)
    response.push(`${product} - ${item.length}`)

  }

  // if(!order){
  //   throw new Error('Pedido não encontrado');
  // }


  return response;

}



export default {
  insertOrder,
  getOrders,
  getOrderById,
  removeOrder,
  updateOrder,
  updateOrderStatus,
  getOrdersByClient,
  getOrdersByProduct,
  getProductsReport
}