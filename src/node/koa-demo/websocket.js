const { message } = require("antd");
const Koa = require("koa");
const staticMiddle = require('koa-static');
const webSocket = require("ws");

const app = new Koa();

app.use(staticMiddle(__dirname + '/public'));
const server = app.listen(8080);
// websocket 复用http
const websocketServer = new webSocket.Server({
    server
})

const clients = new Set();


function broadcast(message) {
    for(const client of clients){
        const {ws,address}=client;
        ws.send(message,(err)=>{
            if(err){
                console.log(`[Broadcast] ${address} err: ${err.message}`)
                clients.delete(client);
                broadcast(`${address} 离开了`)
            }
        })
    }
}

websocketServer.on('connection',(ws,request)=>{
    const address = request.connection.remoteAddress + ':' +request.connection.remotePort;
    const client = (ws,address);
    clients.add(client);
    broadcast(address+"连接")
    ws.on('message',(message)=>{
        broadcast(`${address}: ${message}`)
    })
})