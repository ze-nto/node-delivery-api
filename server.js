import app from './src/app.js';
import http  from 'http';
import { promises as fs} from 'fs';
const { readFile } = fs;

const port =  process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, async () => {
    try{
        await readFile('pedidos.json');
        console.log(`Server running at http://localhost:${port}`)
    } catch (err){
        console.log('pedidos.json not found')
        console.log(err.message);
    }
});