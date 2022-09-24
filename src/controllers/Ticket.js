const TicketModel = require("../database/models/Ticket");
const {
  SELECT_TICKET,
  CLOSE_TICKET,
  SHOW_TICKETS,
  SHOW_MY_TICKETS,
  inferToObjectId,
} = require("../utils/type");

module.exports = (socket) => {
  socket.on(SELECT_TICKET, async (ticket, callback) => {
    const ticketfind = await TicketModel.findOne({
      _id: inferToObjectId(ticket.id),
    });

    if (!ticketfind) return callback({ status: false });

    ticketfind.SupportId = ticket.myid;

    await ticketfind.save();
    socket.join(ticket.id);

    callback({ status: true });
  });

  socket.on(CLOSE_TICKET, async (ticket, callback) => {

    const ticketfind = await TicketModel.findOne({
      _id: inferToObjectId(ticket.id),
      SupportId: ticket.myid,
    });

    if (!ticketfind) return callback({ status: false });

    ticketfind.IsOpen = false;

    ticketfind.save();

    callback({ status: true });
  });

  socket.on(SHOW_TICKETS, async (callback) => {

    const ticketId = await TicketModel.find({ IsOpen: true, SupportId: null });

    callback(ticketId);
  });

  socket.on(SHOW_MY_TICKETS, async ({ ID }, callback) => {
    const ticketId = await TicketModel.find({ UserId: ID });

    callback({ data: ticketId });
  });
};
