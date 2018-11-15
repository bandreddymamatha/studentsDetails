const express = require('express');
const bodyParser = require('body-parser');
const Customer = require('./routes/Customer.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://chinni:chinni143@ds063779.mlab.com:63779/mamatha';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(dev_db_url);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/Customer', Customer);

let port = 7893;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});