const WebSocket = require('ws');

const createEchoServer = server => {
    const wsServer = new WebSocket.Server({ server });

    wsServer.on('connection', (ws, req) => {
        console.log('size: ', wsServer.clients.size);
        console.log('ip: ', req.connection.remoteAddress);
        console.log('port: ', req.connection.remotePort);
        console.log('url: ', req.url);
        ws.on('message', msg => {
            ws.send(msg);
        });
        ws.send('連線了');
    })
}
module.exports = createEchoServer;