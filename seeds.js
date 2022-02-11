const mongoose = require('mongoose')
const User = require('./models/User');
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

const seedUsers = [
    {
        username:"Harsha",
        email:"harsha@gmail.com",
        password:"password",
        role:"student",
        languages:['ruby', 'react', 'js' ],
        photoUrl:"/images/harsha.jpeg",
        
    },
    {
        username: "Michelle",
        email: "michelle@gmail.com",
        password: "password",
        role: "student",
        languages: ['ruby', 'react', 'c', 'r'],
        photoUrl: "/images/michelle.png"

    },
    {
        username: "Perry",
        email: "perry@gmail.com",
        password: "password",
        role: "student",
        languages: ['c', 'ruby', 'js', 'css'],
        photoUrl: "/images/perry.png",

    },
    {
        username: "JJ",
        email: "jing@gmail.com",
        password: "password",
        role: "student",
        languages: ['react', 'ruby', 'js'],
        photoUrl: "/images/jj.jpeg",

    },
    {
        username: "DemoStudent",
        email: "demostudent@gmail.com",
        password: "password",
        role: "student",
        languages: ['react', 'ruby', 'js'],
        photoUrl: "/images/seed1.png",

    },
    {
        username: "DemoTutor",
        email: "demotutor@gmail.com",
        password: "password",
        role: "tutor",
        languages: ['react', 'ruby', 'js', 'c', 'python'],
        photoUrl: "/images/seed2.png",

    },
    {
        username: "tutor2",
        email: "tutor2@gmail.com",
        password: "password",
        role: "tutor",
        languages: ['react', 'ruby', 'js', 'html', 'css'],
        photoUrl: "/images/seed3.png",

    },
    {
        username: "tutor3",
        email: "tutor3@gmail.com",
        password: "password",
        role: "tutor",
        languages: ['react','java', 'js', 'html', 'css'],
        photoUrl: "/images/seed4.png",

    },
    {
        username: "tutor4",
        email: "tutor4@gmail.com",
        password: "password",
        role: "tutor",
        languages: ['react', 'java', 'js', 'c'],
        photoUrl: "/images/seed5.png",

    },
    {
        username: "tutor5",
        email: "tutor5@gmail.com",
        password: "password",
        role: "tutor",
        languages: ['react', 'java', 'js', 'c', 'python', 'html', 'css'],
        photoUrl: "/images/seed6.png",

    },
    {
        username: "tutor6",
        email: "tutor6@gmail.com",
        password: "password",
        role: "tutor",
        languages: ['js', 'c', 'python', 'html', 'css'],
        photoUrl: "/images/seed7.png",

    },

]

const seedDB = async()=>{
    await User.deleteMany({});
    await User.insertMany(seedUsers)
}
seedDB().then(()=>{
    mongoose.connection.close()
})