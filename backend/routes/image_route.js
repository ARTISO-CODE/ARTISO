/* NOTE!!!!!
    This route is for the images functions in general
*/

const express = require('express');
const router = express.Router();
const image_Collection = require('../models/image_Collection');

// file upload
const { upload_images } = require('../middlewares/FileStorage');
const fs = require('fs');

const { BaseUrl } = require('../keys');

router.get('/get_all_images', (req, res) => {
    image_Collection.find()
    .then(images => {
        if(images) res.json(images);
        else res.json('no images available')
    })
    .catch(err => res.json(err))
})

router.post('/delete_an_image', (req, res) => { 
    const { name } = req.body;
    if(!name) res.json('give name');

    image_Collection.findOne({ name })
    .select('_id name imageType')
    .then(async (image) => {
        if(!image) res.json({ message:  'no image exists with this name' })
        
        // delete the image from folder
        let filePath = 'uploads/images/'+image.name +`.${image.imageType}`;
        fs.unlinkSync(filePath);

        // delete the image from dataBase
        await image_Collection.findByIdAndDelete(image._id)
    })
    .then(() => res.json('image removed') )
    .catch(err => res.json('delete_an_image_problem? ' +err))
})

module.exports = router;