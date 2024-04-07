const   generateRandomData=require('./generateRandomData')
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*', // Change this to your allowed origins
    methods: ['GET', 'POST'], // Allow only GET and POST requests
  }
});

// Serve static files (if needed)
app.use(express.static('public'));

// Publish random message to 'topic' every 3 seconds
   setInterval(() => {
    const randomMessage = Math.random().toString(36).substring(7);
    io.emit('message', randomMessage);
}, 3000);



 setInterval(() => {
    const  citiesWeather=  generateRandomData() ;
    io.emit('weather',  citiesWeather);
}, 1000);


// Socket connection
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
