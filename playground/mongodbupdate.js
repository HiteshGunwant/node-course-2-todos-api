const {MongoClient,ObjectId} =require("mongodb")

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',(err,db)=>{
  if(err){
  return  console.log("Unable to connect mongodb server");
  }
      console.log("Connected to  mongodb server");
      db.collection('Users').findOneAndUpdate(
        {_id: new ObjectId("5b094fb2ed9270c7a5aeb59c")},
        {
          $set: {name:"pratham"},
          $inc: {age:25},
        },
        {
          returnOriginal:false
        }

      ).then(
        ((docs)=>{
        console.log(JSON.stringify(docs,undefined,2))
      })
        ,(err)=>{
          console.log(`ERROR${err}`)
        })
    //  db.close()
})
