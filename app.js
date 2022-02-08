const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const passport = require('passport');  

// socket.io
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});
// end socket.io

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);

app.use(passport.initialize())
require('./config/passport')(passport);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

// socket.io
io.on("connection", (socket) => {
    socket.emit("me", socket.id)

    socket.on("disconnect", () => {
        socket.broadcast.emit("callEnded")
    })

    socket.on("callUser", data => {
        io.to(data.userToCall).emit("callUser", { 
            signal: data.signalData, from: data.from, name: data.name 
        })
    })

    socket.on("answerCall", data => {
        io.to(data.to).emit("callAccepted", data.signal)
    })
})
// end socket.io