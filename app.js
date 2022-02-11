const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const videos = require("./routes/api/videos")
const passport = require('passport');
const path = require('path');
const multer = require('multer');
const upload = multer({dest: 'uploads/'})
const reviews = require('./routes/api/reviews')

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use('/api/videos', videos);
app.use('/api/reviews', reviews)

app.use(passport.initialize())
require('./config/passport')(passport);

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