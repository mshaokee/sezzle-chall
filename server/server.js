const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//run heroku or 5000
const PORT = process.env.PORT || 5000;

//server files -- middleware
app.use(bodyParser.json());
app.use(express.static('build'));

//require routers
const historyRouter = require('./routes/history.router');

//ROUTES
app.use('/history', historyRouter);

//Listen
app.listen(PORT, () => {
    console.log('server is running on PORT:', PORT);
});//end