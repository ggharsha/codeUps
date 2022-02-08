const process = require("process");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");
app.use(cors());

const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        cors: true,
        allowEI03: true
    }
});

io.on("connection", (socket) => {
    socket.emit("me", socket.id)
    console.log("connected")

    socket.on("disconnect", () => {
        socket.broadcast.emit("callEnded")
        console.log("disconnected")
    })

    socket.on("callUser", data => {
        io.to(data.userToCall).emit("callUser", {
            signal: data.signalData, from: data.from, name: data.name
        })
        console.log("call user")
    })

    socket.on("answerCall", data => {
        io.to(data.to).emit("callAccepted", data.signal)
        console.log("answer call")
    })
})

const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`Server is running on port ${port}`));