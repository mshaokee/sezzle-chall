const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//run heroku or 5000
const PORT = process.env.PORT || 5000;

//server files
app.use(bodyParser.urlencoded({encoded:true}));
app.use(express.static('server/public'));

//ROUTES

//Listen
app.listen(PORT, () => {
    console.log('server is running on PORT:', PORT);
});//end