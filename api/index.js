const express = require('express');
const mongoose = require('mongoose')

const app = express();

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//database
const dbURI = 'mongodb://sloabd:Cutestcat27@slo-project-shard-00-00.wpacw.mongodb.net:27017,slo-project-shard-00-01.wpacw.mongodb.net:27017,slo-project-shard-00-02.wpacw.mongodb.net:27017/slo_user?ssl=true&replicaSet=atlas-ca6oyr-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.connect(dbURI, {
                            useNewUrlParser: true,
                            useUnifiedTopology: true,
                            useFindAndModify: false,
                            useCreateIndex: true
                          });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("MongoDB Connected...");
});

//route 
const Users = require('./routes/users');
const Seats = require('./routes/seats');

app.use(Seats);
app.use(Users);


module.exports = app