const {MongoClient,ObjectId} =require("mongodb")

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',(err,db)=>{
  if(err){
  return  console.log("Unable to connect mongodb server");
  }
      console.log("Connected to  mongodb server");
      db.collection('Todos').find({text:"pratham"}).toArray().then(
        ((docs)=>{
        console.log(JSON.stringify(docs,undefined,2))
      })
        ,(err)=>{
          console.log(`ERROR${err}`)
        })
    //  db.close()
})
