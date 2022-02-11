const mongoose = require('mongoose')
const Video = require('./models/Video')
const Review = require('./models/Review')
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

const reviewSeed = [
    
    {
        tutorId:"6205e10ae43cd88a7e60a86d",
        studentId:"6205e012e43cd88a7e60a854",
        rating:5,
        text:"They were so good! I learned a lot about Ruby on Rails!"
    },
    {
        tutorId: "6205e10ae43cd88a7e60a86d",
        studentId: "6205dff6e43cd88a7e60a851",
        rating: 4,
        text: "Very professional!"
    },
    {
        tutorId: "6205e0c7e43cd88a7e60a866",
        studentId: "6205e05ee43cd88a7e60a85a",
        rating: 3,
        text: "Meh"
    },
    {
        tutorId: "6205e0c7e43cd88a7e60a866",
        studentId: "6205dff6e43cd88a7e60a851",
        rating:1,
        text: "NOT GOOD!"
    },
    {
        tutorId: "6205e032e43cd88a7e60a857",
        studentId: "6205e012e43cd88a7e60a854",
        rating:5,
        text: "I Like them!"
    },
    {
        tutorId: "6205e032e43cd88a7e60a857",
        studentId: "6205e05ee43cd88a7e60a85a",
        rating: 5,
        text: "I Like them!"
    },
    {
        tutorId: "6205e0e9e43cd88a7e60a869",
        studentId: "6205e079e43cd88a7e60a85d",
        rating: 5,
        text: "So Good!"
    },
    {
        tutorId: "6205e0e9e43cd88a7e60a869",
        studentId: "6205e08ee43cd88a7e60a860",
        rating: 4,
        text: "I learned a lot!"
    },
    {
        tutorId: "6205e0b0e43cd88a7e60a863",
        studentId: "6205e08ee43cd88a7e60a860",
        rating: 3,
        text: "Emmm...Just okay"
    },
    {
        tutorId: "6205e0b0e43cd88a7e60a863",
        studentId: "6205e05ee43cd88a7e60a85a",
        rating: 2,
        text: "He talks too fast"
    },


]

const videoSeed = [
    {
        title:"Hello World!",
        authorId: "6205e032e43cd88a7e60a857",
        videoUrl:"/images/trimming1.mp4",
        featured:   true,

    },
    {
        title: "Junior Programmer",
        authorId: "6205e032e43cd88a7e60a857",
        videoUrl: "/images/trimming2.mp4",
        featured: false,
        
    },
    {
        title: "React Redux",
        authorId: "6205e032e43cd88a7e60a857",
        videoUrl: "/images/trimming3.mp4",
        featured: false,
     
    },
    {
        title: "Recursion",
        authorId: "6205e032e43cd88a7e60a857",
        videoUrl: "/images/trimming4.mp4",
        featured: false,
        
    },
    {
        title: "BubbleSort",
        authorId: "6205e0b0e43cd88a7e60a863",
        videoUrl: "/images/trimming5.mp4",
        featured: true,
     
    },
    {
        title: "Advance Ruby",
        authorId: '6205e0b0e43cd88a7e60a863',
        videoUrl: "/images/trimming6.mp4",
        featured: false,
        
    },
    {
        title: "Tow Sum",
        authorId: '6205e0b0e43cd88a7e60a863',
        videoUrl: "/images/trimming7.mp4",
        featured: false,
       
    },
    {
        title: "Fibonacci Sequence",
        authorId: '6205e0b0e43cd88a7e60a863',
        videoUrl: "/images/trimming8.mp4",
        featured: false,
      
    },
    {
        title: "Factorial",
        authorId: '6205e0c7e43cd88a7e60a866',
        videoUrl: "/images/trimming9.mp4",
        featured: true,
      
    },
    {
        title: "Merge Sort",
        authorId: '6205e0c7e43cd88a7e60a866',
        videoUrl: "/images/trimming10.mp4",
        featured: false,
      
    },
    {
        title: "Rails",
        authorId: '6205e0c7e43cd88a7e60a866',
        videoUrl: "/images/trimming11.mp4",
        featured: false,

    },
    {
        title: "Flexbox",
        authorId: '6205e0c7e43cd88a7e60a866',
        videoUrl: "/images/trimming12.mp4",
        featured: false,

    },
    {
        title: "CSS Grid",
        authorId: '6205e0e9e43cd88a7e60a869',
        videoUrl: "/images/trimming13.mp4",
        featured: true,

    },
    {
        title: "HTML Elements",
        authorId: '6205e0e9e43cd88a7e60a869',
        videoUrl: "/images/trimming14.mp4",
        featured: false,

    },
    {
        title: "DOM Manupilation",
        authorId: '6205e0e9e43cd88a7e60a869',
        videoUrl: "/images/trimming15.mp4",
        featured: false,

    },
    {
        title: "Javascript",
        authorId: '6205e0e9e43cd88a7e60a869',
        videoUrl: "/images/trimming16.mp4",
        featured: false,

    },
    {
        title: "Promise, Async, Await",
        authorId: '6205e10ae43cd88a7e60a86d',
        videoUrl: "/images/trimming17.mp4",
        featured: true,

    },
    {
        title: "MongoDB",
        authorId: '6205e10ae43cd88a7e60a86d',
        videoUrl: "/images/trimming18.mp4",
        featured: false,

    },
    {
        title: "Binary Search",
        authorId: '6205e10ae43cd88a7e60a86d',
        videoUrl: "/images/trimming19.mp4",
        featured: false,

    },
    {
        title: "MERN Stack",
        authorId: '6205e10ae43cd88a7e60a86d',
        videoUrl: "/images/trimming20.mp4",
        featured: false,

    },

]


const seedDB = async()=>{
    await Video.deleteMany({})
    await Video.insertMany(videoSeed)
    await Review.deleteMany({})
    await Review.insertMany(reviewSeed)
}

seedDB().then(()=>{
    mongoose.connection.close()
})