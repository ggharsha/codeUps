const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const passport = require('passport');
const path = require('path');
const multer = require('multer');
const upload = multer({dest: 'uploads/'})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

// socket.io
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



// socket.io
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
// end socket.io

//images
// app.post('/images', upload.single('image')(req, res)=>{
//     res.send("okay")
// })
const {getFiles} = require('./s3')
app.get('/images/:key', (req, res)=>{
    const key = req.params.key
    const readStream = getFiles(key)
    readStream.pipe(res)
})


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
server.listen(9000, () => console.log(`Server is running on port 9000`));