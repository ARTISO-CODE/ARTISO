const express = require('express');
const router = express.Router();
const emailList_Collection = require('../models/emailList_Collection');

router.post('/add_to_emailList', (req, res) => {
    const { email } = req.body;

    if(!email || !email.includes('@')) res.json({ error: 'Veuillez ajouter un email svp :)' });

    emailList_Collection.findOne({ email })
    .then(emailFound => {
        if(emailFound) res.json({ message: "T'es déja avec nous :)" })
        else{
            const new_email = emailList_Collection({
                email,
                created_at: new Date().toUTCString()
            })
            new_email.save()
            .then(saved_email => res.json({message: 'Merci pour votre intéret :)'}) )
            .catch(err => console.log('add_to_emailList "ERROR": ', err))
        }
    })
})

router.get('/get_all_emailList', (req, res) => {
    emailList_Collection.find()
    .then(emailList => {
        if(emailList.length === 0) res.json({ message: "pas d'email" })
        else res.json(emailList);
    })
})

router.get('/delete_all_emailList', (req, res) => {
    emailList_Collection.find()
    .then(emailList => emailList.forEach(email => {
        emailList_Collection.findByIdAndDelete(email._id)
        .then(() => res.json('all emailList successfuly deleted'))
    }))
    .catch(err => res.json('error delete_all_emailList: | ' +err))
})

router.post('/delete_one_email', (req, res) => {
    const { email_id } = req.body;

    emailList_Collection.findByIdAndDelete(email_id)
    .then(() => res.json('email successfuly deleted'))
    .catch(err => res.json('error delete_an_email: | ' +err))
})

module.exports = router;