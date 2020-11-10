const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//run heroku or 5000
const PORT = process.env.PORT || 5000;

//TEST
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3030 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
});
//TEST

//server files -- middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('build'));

//require routers
const historyRouter = require('./routes/history.router');

//ROUTES
app.use('/history', historyRouter);

//Listen
app.listen(PORT, () => {
    console.log('server is running on PORT:', PORT);
});//end