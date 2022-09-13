

const  mongoose =require( 'mongoose');
const { Schema } = mongoose;

 const Ticket = new Schema({
  UserId:String,
  SupportId:String,
  IsOpen:Boolean
})


module.exports=TicketModel = mongoose.model('Ticket', Ticket);
