const express = require("express");

const mongoose = require("mongoose");

const path = require('path')

const cors = require("cors");

const loaduser = require("./src/controllers/Users");
const loadtiket = require("./src/controllers/Ticket");
const loadMsg = require("./src/controllers/Message");



require("dotenv").config();
const { createServer } = require("http");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

const { Server } = require("socket.io");
const httpServer = createServer(app);

const io = new Server(httpServer, 
  {
    cors: {
      origin: "http://sadna.info",
      methods: ["GET", "POST"]
    }
  });

io.on("connection", (socket) => {

  console.log("\x1b[33m%s\x1b[0m", `SOCKETIO SERVER RUNNING ON PORT:${PORT}`);

   loaduser(socket)
   loadtiket(socket)
   loadMsg(socket)

});


const { DB_HOST, DB_PORT, DB_NAME } = process.env;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
app.use(express.static(path.join(__dirname, "build")));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});


httpServer.listen(PORT, () => {
  console.log("\x1b[33m%s\x1b[0m", `NODEJS SERVER RUNNING ON PORT:${PORT}`);
});
