const MongoClient =require("mongodb").MongoClient

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',(err,db)=>{
  if(err){
  return  console.log("Unable to connect mongodb server");
  }
      console.log("Connected to  mongodb server");
      db.collection('Todos').insertOne({
text:"hellow world",
fuck:true
      },(err,result)=>{
        if(err){
          return console.log("unable to insert todo",err)
        }
         console.log(JSON.stringify(result.ops,undefined,2))
      })
      db.close()
})
