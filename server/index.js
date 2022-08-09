let express = require('express');
let mongoose = require('mongoose');
let indexRoutes = require ('./routes/index.js');
var cors = require('cors');
let bodyParser = require('body-parser');
const passport = require("passport");
const passportSetup = require("./passport");
const cookieSession = require("cookie-session");
require("dotenv").config({ path: "./config.env" });
const http = require("http");
const { Server } = require("socket.io");
const Db = process.env.MongoURL;
const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(
  cookieSession({ name: "session", keys: ["finalProj"], maxAge: 24 * 60 * 60 * 100 })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
}));
app.use('/', indexRoutes);

const CONNECTION_URL = Db;
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


server.listen(3001, () => {
  console.log("SERVER RUNNING");
});