var express = require('express');
var app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

// set the view engine to ejs
app.set('view engine', 'ejs');



// mongodb connection
const database = process.env.MONGODB_URI;
mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('done connected'))
.catch(err => console.log(err));


// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080, console.log('Server is listening on port 8080'));
