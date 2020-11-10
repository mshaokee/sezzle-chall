const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//run heroku or 5000
const PORT = process.env.PORT || 5000;
//heroku require path
const path = require('path');

// const io = require('socket.io').listen(server);

//server files -- middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//server static files
app.use(express.static('build'));

//require routers
const historyRouter = require('./routes/history.router');

//ROUTES
app.use('/history', historyRouter);
//test
app.use('/', (req, res) => {
    res.send('prep for socket.io');
})

//heroku
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});//end

//Listen
app.listen(PORT, () => {
    console.log('server is running on PORT:', PORT);
});//end