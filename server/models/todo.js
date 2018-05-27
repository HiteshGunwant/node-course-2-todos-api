var Mongoose =require("mongoose")

var Todo =Mongoose.model('Todo',{
  text:{
    type: String,
    required:true,
    trim:true,
    minlength:1
  },
  complete:{
    type: Boolean,
    default:false,
  },
  completedAt:{
    type: Number,
    default:null,
  }
})

// var newTodo = new Todo({
// text:"feed pratham",
// complete:false,
// completedAt:900
// })
// newTodo.save().then((doc)=>{
// console.log(JSON.stringify(doc,undefined,2))
// },(e)=>{
// console.log(`unable to save ${e}`)
// }
// )
module.exports = {Todo}
