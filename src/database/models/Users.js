const mongoose =require( 'mongoose');
const { Schema } = mongoose;

 const Users = new Schema({
  name:String,
  type:String
})

module.exports  = mongoose.model('Users', Users);
