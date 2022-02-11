const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const passport = require('passport')
const Video = require('../../models/Video')


router.get('/', (req, res)=>{

        Video.find()
            .then(videos => { 
                return res.json(videos) 
            })
    
    
})
const findVideo = (req, res, next)=>{
   
    Video.find({ authorId: req.params.authorId })
        .then(docs => { 
            req.videos = docs
            next()
        })
        .catch(err => res.status(404).json({ notvideosfound: "No videos found" }))
    
}

router.get('/:authorId', findVideo, (req, res) => {
  //  console.log(req.videos)
  // let result 
  //   req.videos.map(video=> {      
  //     if(video.featured)result = video      
  //   })
   
  return res.json(req.videos)
})

router.get('/:id', (req, res) => {
    Video.find({ id: req.params.id })
        .then(video => { res.json(video) })
        .catch(err => res.status(404).json({ notvideosfound: "No video found" }))
})


module.exports = router;