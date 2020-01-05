const portNumber = 3000;
const express = require('express');

const app = express();



/* Routes*/

const siteRoute = require('./routes/site');

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(siteRoute);


app.listen(portNumber)