const { json } = require("body-parser");
const express = require("express");
const { db } = require("../../models/Review");
const router = express.Router();
const Review = require('../../models/Review')
const validateReviewInput = require('../../validation/review')

const studentReviews = (req, res, next)=>{
    Review.find({ studentId: req.params.id })
        .then(reviews => {
            if(reviews.length < 1) {
                next()
            }else{
                console.log(reviews)
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
                console.log("tutor")
                return res.json(reviews)
            }
        })
}

router.get('/:id', studentReviews, tutorReviews, (req, res)=>{
   
})

// router.get('/:studentId',((req, res)=>{
    
//     Review.find({ studentId: req.params.studentId })
//         .then(reviews => { res.json(reviews) })
//         .catch(err => res.status(404).json({ noreviewsfound: "No reviews found" }))
// }))

// router.get('/:tutorId', ((req, res) => {
//     Review.find({ tutorId: req.params.tutorId })
//         .then(reviews => { res.json(reviews) })
//         .catch(err => res.status(404).json({ noreviewsfound: "No reviews found" }))
// }))


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
    next()
}

const findStudent = async(req, res, next)=>{
   
  req.student =  await User.findById(req.review.studentId)
        .then(user => {return user.username} )
   
    next()
}
const findTutor = async (req, res, next) => {
    req.tutor = await User.findById(req.review.tutorId)
        .then(user => { return user.username })

    next()
}
router.post('/new', createReview, findStudent, findTutor, (req, res)=>{

    
    const newReview = {
        id: req.review.id,
        student: req.student,
        tutor: req.tutor,
        text: req.review.text,
        rating: req.review.rating,
        createdAt: req.review.createdAt
        // updatedAt: req.review.updatedAt
    }

    return res.json(newReview)
})

const update = (req, res, next)=>{
    Review.findOneAndReplace({ _id: req.body.id }, req.body, { returnDocument: "after" }, (err, docs) => {
        if (err) {
            return res.json(err)
            
        } else {
          
            req.review = docs;
            next()
        }
    })
}

router.patch('/edit', update, findStudent, findTutor,(req, res)=>{
    

    const updatedReview = {
        id: req.review.id,
        student: req.student,
        tutor: req.tutor,
        text: req.review.text,
        rating: req.review.rating,
        // createdAt: req.review.createdAt
        updatedAt: req.review.updatedAt
    }

    return res.json(updatedReview)
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