const express = require("express");
const router = express.Router();
const passport = require('passport')
const Video = require('../../models/Video')

// router.get('/?title=test', (req, res) => {
//     console.log(res)
//     Video.find({ title: res.query.title })
//         .then(videos => { res.json(videos) })
//         .catch(err => res.status(404).json({ notvideosfound: "No videos found" }))
// })

router.get('/', (req, res)=>{
    //videos/?key=value
    // console.log(req)
    
    if (req.query) {
        const key = Object.keys(req.query)[0]
        switch(key)
       { case 'title':
           Video.find({ title: req.query.title })
            .then(videos => { res.json(videos) })
            .catch(err => res.status(404).json({ notvideosfound: "No videos found" }));
        // case 'featured':
        //         Video.find({ title: req.query.title })
        //             .then(videos => { res.json(videos) })
        //             .catch(err => res.status(404).json({ notvideosfound: "No videos found" }));
        }
    }else{
        Video.find()
            .then(videos => { res.json(videos) })
    }
    
})


router.get('/:authorId', (req, res) => {
    Video.find({authorId: req.params.authorId})
        .then(videos => { res.json(videos) })
        .catch(err => res.status(404).json({ notvideosfound: "No videos found" }))
})


module.exports = router;