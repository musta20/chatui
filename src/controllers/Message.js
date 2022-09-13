const { NEW_MESSAGE , GET_MESSAGES ,NEW_TICKET,GET_TICKET, SHOW_TICKETS,NEW_MESSAGE_REMOT ,inferToObjectId } = require("../utils/type");
const  MessageModel = require("../database/models/Message");
const Ticket = require("../database/models/Ticket");

module.exports   = (socket) => {

  socket.on(NEW_MESSAGE, async ( message , callback) => {
    console.log(message)
  const data =  await new MessageModel(message).save();

    socket.to(message.ticket).emit(NEW_MESSAGE_REMOT, message);
    callback(data)
  });

  socket.on(GET_MESSAGES, async ({ Ticket }, callback) => {

    const AllMesage = await MessageModel.find({ Ticket });

    callback(AllMesage);
  });
  
  socket.on(NEW_TICKET, async (ticket, callback) => {
    const user = await new Ticket(ticket).save();

    if (user) {
      callback({ status: true , ticket:user.id});
    }
    socket.join(ticket.id);
  });

  socket.on(GET_TICKET, async ({ID}, callback) => {
    console.log(ID)
    const user = await  Ticket.findById(inferToObjectId(ID));

    if (user) {
      callback({ status: true , ticket:user.id});
      socket.join(ID);

    }


  });

};
