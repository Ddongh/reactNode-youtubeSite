const express = require('express');
const router = express.Router();
const { Subscriber } = require("../models/Subscriber");


//=================================
//             Subscribe
//=================================

router.post('/subscribeNumber', (req, res) => {
    
    Subscriber.find({ 'userTo': req.body.userTo })
    .exec((err, subscribe) => {
        if(err) return res.status(400).send(err);
        return res.status(200).json({ success: true, subscribeNumber: subscribe.length });
    })
})

router.post('/subscribed', (req, res) => {
    
    Subscriber.find({ 'userTo': req.body.userTo, 'userFrom': req.body.userFrom })
    .exec((err, subscriber) => {
        if(err) return res.status(400).send(err);
        let result = false
        if(subscriber.length !== 0) {
            return true
        }
        res.status(200).json({ success: true, subscribed: result })
    })
});


module.exports = router;
