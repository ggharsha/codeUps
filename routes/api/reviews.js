const express = require("express");
const router = express.Router();
const Review = require('../../models/Review')
const validateReviewInput = require('../../validation/review')

const studentReviews = (req, res, next)=>{
    Review.find({ studentId: req.params.id })
        .then(reviews => {
            if(reviews.length < 1) {
                next()
            }else{
                // console.log(reviews)
                return res.json(reviews)
            }
        })
        
}
const tutorReviews = (req, res, next) => {
    Review.find({ tutorId: req.params.id })
        .then(reviews => {
            if (reviews.length < 1) {
                next()
            } else {
                // console.log(reviews)
                return res.json(reviews)
            }
        })
}

router.get('/:id', studentReviews, tutorReviews, (req, res)=>{
    
})




const createReview = (req, res, next)=> {
    
    const { errors, isValid } = validateReviewInput(req.body);
    
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const review = new Review({
        studentId: req.body.studentId,
        tutorId: req.body.tutorId,
        text: req.body.text,
        rating: req.body.rating
    })
    review.save()
    req.review = review
    return res.json(review)
}


router.post('/new', createReview, (req, res)=>{

    // return res.json(newReview)
})

const update = (req, res, next)=>{
    Review.findOneAndReplace({ _id: req.body._id }, req.body, { returnDocument: "after" }, (err, docs) => {
        if (err) {
            return res.json(err)
        } else {
            req.review = docs;
            return res.json(docs)
        }
    })
}

router.patch('/edit', update, (req, res)=>{
    

})

router.delete('/delete/:id',(req, res)=>{
    const id = req.params.id
    
    Review.findByIdAndRemove({_id: id},null, (err, docs)=>{
        if(err){
            console.log(err)
            return res.json(err)
        }else{

            res.send('review has been deleted')
        }
    })
} )

module.exports = router;