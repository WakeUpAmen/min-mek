'use strict';
const express    = require('express');        
const bodyParser = require('body-parser');
const app        = express();                 

const unitRouter = require('./unit-router');
const pilotRouter = require('./pilot-router');
const methRouter = require('./meth-router');

const mongoose   = require('mongoose');
mongoose.connect('mongodb://admin:admin1@ds239940.mlab.com:39940/min-mek');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8888;    



app.get('/', (req, res) => {
                res.json({ message: 'welcome to our home page!' });   
});

app.use('/api-unit', unitRouter);
app.use('/api-pilot', pilotRouter);
app.use('/api-meth', methRouter);

app.listen(port, () => {
                console.log('minmek server happens on port ' + port)}
);

