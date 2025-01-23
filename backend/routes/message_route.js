const express = require('express');
const router = express.Router();
const message_Collection = require('../models/message_Collection');

router.post('/add_to_message', (req, res) => {
    const { name, email, subject, message } = req.body;

    if(!email || !email.includes('@')) res.json({ error: 'Veuillez ajouter un email svp :)' });
    if(!name || !subject || !message) res.json({ error: 'Veuillez remplir tous svp :)' });

    message_Collection.findOne({ name, email, subject, message })
    .then(messageFound => {
        if(messageFound) res.json({ message: "T'as déja envoyé ce message" })
        else{
            const new_message = message_Collection({
                name,
                email,
                subject,
                message,
                created_at: new Date().toUTCString()
            })
            new_message.save()
            .then(saved_message => res.json({message: 'Merci pour votre intéret :)'}) )
            .catch(err => console.log('add_to_messages "ERROR": ', err))
        }
    })
})

router.get('/get_all_messages', (req, res) => {
    message_Collection.find()
    .then(messages => {
        if(messages.length === 0) res.json({ message: "pas de messages" })
        else res.json(messages);
    })
})

router.get('/delete_all_message', (req, res) => {
    message_Collection.find()
    .then(messages => messages.forEach(message => {
        message_Collection.findByIdAndDelete(message._id)
        .then(() => res.json('all messages successfuly deleted'))
    }))
    .catch(err => res.json('error delete_all_messages: | ' +err))
})

router.post('/delete_one_message', (req, res) => {
    const { message_id } = req.body;

    message_Collection.findByIdAndDelete(message_id)
    .then(() => res.json('message successfuly deleted'))
    .catch(err => res.json('error delete_one_message: | ' +err))
})

module.exports = router;