//path  cd "C:\Program Files\MongoDB\Server\3.6\bin"
//mongod.exe --dbpath C:\Users\H!TMaN\mongo-data
var express = require("express");
var bodyParser = require("body-parser");

const {Mongoose} =require('./db/mongoose')
const {Todo} =require("./models/todo")
const {Users} =require("./models/users")

var app = express();

app.use(bodyParser.json())

app.post("/todos",(req,res)=>{
console.log("debugg==>",req.body);
var todo = new Todo({
  text: req.body.text
})
todo.save().then((doc)=>{
  res.status(200).send(doc);
}),(e)=>{
  res.status(400).send(e)
}
})


app.listen(3000,(res,err)=>{
    console.log(`server connected at 3000${res}`)
})
