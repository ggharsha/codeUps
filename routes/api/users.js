const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get('/students', (req, res)=>{
    User.find({role: "student"}, ((err, students)=>{
        res.json(students)
    }))
})

router.get('/tutors', (req, res)=>{
    User.find({role: "tutor"}, ((err, tutors)=>{
        res.json(tutors)
    }))
})
router.get('/:id', (req, res)=>{
    console.log(req)
    User.findById(req.params.id)
        .then(user=>{
            if(!user){
                return res.status(400).json(errors);
            }else{
                res.json(user)
            }
        })
})

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({id: req.user.id, 
                username: req.user.username,
                role: req.user.role});
})


router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    // Check to make sure nobody has already registered with a duplicate email
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                // Use the validations to send the error
                errors.email = 'Email already exists';
                return res.status(400).json(errors);
            } else {
                const newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    role: req.body.role,
                    languages: req.body.languages
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => {
                                const payload = { id: user.id, username: user.username };

                                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                    res.json({
                                        success: true,
                                        token: "Bearer " + token
                                    });
                                });
                            })
                            .catch(err => console.log(err));
                    });
                })
            }
        })
})

router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }


    User.findOne({ username })
        .then(user => {
            if (!user) {
                // Use the validations to send the error
                errors.username = 'User not found';
                return res.status(404).json(errors);
            }

            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    const payload = { id: user.id, username: user.username};

                    jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    });
                } else {
                    errors.password = "Incorrect password";
                    return res.status(400).json(errors);
                }
            });
        })
})

module.exports = router;