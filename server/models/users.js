const Mongoose =require("mongoose")


var User =Mongoose.model('User',{
  email:{
    type: String,
    trim:true,
    minlength:1,
    required:true
  }
})
// var newUser = new User({
// email:" asd@gmail.com  ",
// })
//
// newUser.save().then((doc)=>{
// console.log(JSON.stringify(doc,undefined,2))
// },(e)=>{
// console.log(`unable to save ${e}`)
// }
// )

module.exports={User}
