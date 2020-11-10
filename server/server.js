const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//run heroku or 5000
const PORT = process.env.PORT || 5000;
//heroku require path
const path = require('path');

// //TEST to connect to websocket using websocket http
// const webSocketsServerPort = 8000;
// const webSocketServer = require('websocket').server;
// const http = require('http');
// // spinning the http server and websocket server
// const server = http.createServer();
// server.listen(webSocketsServerPort);
// console.log('listening on port 8000');

// const wsServer = new webSocketServer({
//     httpServer: server
// });

// const clients = {};

//generates unique id for users
// const getUniqueId = () => {
//     const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//     return s4() + s4() + '-' + s4();
// }

// wsServer.on('request', function(request) {
//     let userID = getUniqueID();
//     console.log((new Date()) + ' Received a new connection from origin ' + request.origin + '.');

//     //accept request
//     const connection = request.accept(null, request.origin);
//     //store connection
//     clients[userID] = connection;
//     console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients));

//     //on message handler
//     connection.on('message', function(message) {
//         if (message.type === 'utf8') {
//             console.log('Received Message: ', message.utf8Data);
//             //broadcasting message to connected clients
//         }
//         for(key in clients) {
//             clients[key].sendUTF(message.utf8Data);
//             console.log('sent Message to: ', clients[key]);
//         }
//     })
// });//end


//end new test

//server files -- middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//server static files
app.use(express.static('build'));

//require routers
const historyRouter = require('./routes/history.router');

//ROUTES
app.use('/history', historyRouter);

//heroku
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});//end

//Listen
app.listen(PORT, () => {
    console.log('server is running on PORT:', PORT);
});//end