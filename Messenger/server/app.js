import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';

const port = 3000;
const app = express();

// Server for the messenger app
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Route to check if the server is running
app.get('/', (req, res) => {
  res.send('Messenger App Server is running!')
});

// Socket connection
io.on('connection', (socket) => {
  socket.emit('user-connected', { firstname: 'Rakesh', lastname: "Jhun Jhunwala", email: 'rj@richpanel.com', profilePic: "https://www.forbesindia.com/media/images/2022/Aug/img_191977_rakeshjhunjhunwala_sm.jpg" });
  socket.emit('user-connected-messenger', { firstname: 'Yasir', lastname: "Mansoori", email: 'ym@richpanel.com', profilePic: "https://www.forbesindia.com/media/images/2022/Aug/img_191977_rakeshjhunjhunwala_sm.jpg" });
  socket.on('message', (msg) => {
    socket.broadcast.emit('receive-message', msg);
  });
  socket.on("send-message", (msg) => {
    socket.broadcast.emit("receive-message", msg);
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});