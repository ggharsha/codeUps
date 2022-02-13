const express = require("express");
const router = express.Router();
const User = require('../../models/User')
const Inbox = require('../../models/Inbox');
const res = require("express/lib/response");


router.get('/', (req, res)=>{
  Inbox.find({$or: [{senderId: req.body.userId}, {receiverId: req.body.userId}]})
  .then((err, docs)=>{
     if(err){
        return res.json(err)
     }else{
        return res.json(docs)
     }
  })
})


router.post('/new', (req, res)=>{
    
    const inbox = new Inbox({
       senderId: req.body.senderId,
       receiverId: req.body.receiverId,
       messages: req.body.messages
    })
   inbox.save()
   return res.json(inbox)
})

router.patch('/update', (req, res, next)=>{

   Inbox.findOne({senderId: req.body.senderId, receiverId: req.body.receiverId} ).then(inbox => {
      if(!inbox) {res.send('no related messages found, pls start a new chat')}
      else { 
         const history = inbox.messages
       history.push(req.body.messages)
       inbox.messages = history
        inbox.save()
      return res.json(inbox)}
        
    })
   
})

module.exports = router