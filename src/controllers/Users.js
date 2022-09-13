const { NEW_SESSION, GET_MESSAGES, NEW_TICKET } = require("../utils/type");
const UsersModel = require("../database/models/UserMySql");

module.exports = (socket) => {
  socket.on(NEW_SESSION, async ({ token }, callback) => {
    console.log("THE EVENT token", token);

    const user = await UsersModel.User.findOne({
      where: { live_support_token: token },
    });

    if (user) {
      console.log(user.name)
      callback({ status: true, user: { id: user.id, name: user.name } });
    }
  });



  socket.on(GET_MESSAGES, async ({ Ticket }, callback) => {
    const AllMesage = await Message.find({ Ticket });

    callback(AllMesage);
  });
};
