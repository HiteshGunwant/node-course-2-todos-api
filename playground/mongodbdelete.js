const {MongoClient,ObjectId} =require("mongodb")

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',(err,db)=>{
  if(err){
  return  console.log("Unable to connect mongodb server");
  }
      console.log("Connected to  mongodb server");

      
      deleteMany
      db.collection('Todos').deleteMany({text:"pratham"}).then(
        ((result)=>{
        console.log(JSON.stringify(result,undefined,2))
      })
        ,(err)=>{
          console.log(`ERROR${err}`)
        })


        deleteOne
      db.collection('Todos').deleteOne({text:"priyank"}).then(
        ((result)=>{
        console.log(JSON.stringify(result,undefined,2))
      })
        ,(err)=>{
          console.log(`ERROR${err}`)
        })


        findOneAndDelete
        db.collection('Todos').findOneAndDelete({_id:new ObjectId("5b090887bb6da608a075a3f1")}).then(
          ((result)=>{
          console.log(JSON.stringify(result,undefined,2))
        })
          ,(err)=>{
            console.log(`ERROR${err}`)
          })
    //  db.close()
})
