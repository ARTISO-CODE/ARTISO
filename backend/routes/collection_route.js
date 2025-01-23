const express = require('express');
const router = express.Router();
const collection_Collection = require('../models/collection_Collection');

// *************** Collection of product ****************
router.get('/show_all_collections', (req, res) => {
    collection_Collection.find()
    .then(categories => res.json(categories))
    .catch(err => res.json({ error: 'Error in: book_route:show_all_categories:catch() ' +err }) )
})

router.post('/add_collection', (req, res) => {
    const { name } = req.body;
    if(!name) res.json({ error: 'there is no collection name'});

    collection_Collection.findOne({ name })
    .then(collection => {
        if(collection) res.json({ error: 'already exist' });
        else{
            const newCollection = new collection_Collection({ 
                name,
                created_at: new Date().toUTCString()
            })
            newCollection.save()
            .then(savedCollection => res.json({ message: `${savedCollection.name} Collection is successfuly saved` }))
            .catch(err => res.json({ error: 'Error in: Collection_route:add_Collection:newCollection.save() ' +err }))
        }
    })
})

router.get('/delete_all_collections', (req, res) => {
    collection_Collection.find()
    .then(collections => collections.forEach(collection => {
        collection_Collection.findByIdAndDelete(collection._id)
        .then(() => res.json('all collections successfuly deleted'))
    }))
    .catch(err => res.json('error delete_all_collections: | ' +err))
})

router.post('/delete_collection', (req, res) => {
    const { id } = req.body;
    if(!id) res.json({ error: 'there is no collection id'});

    collection_Collection.findByIdAndDelete(id)
    .then(() => res.json({ message: 'successfuly deleted' }) )
    .catch(err => res.json({ error: 'there is no collection with that id :' +err }) )
})

router.post('/search_collection', (req, res) => {

    const { search_string } = req.body;
    if(!search_string) res.json({ Empty_error: 'there is no message' })

    const search_str_lower = search_string.toLowerCase();

    collection_Collection.find()
    .then(collections => {
        let collectionsFound = []

        collections.map(collection => {
            const name = collection.name.toLowerCase();

            if(name.startsWith(search_str_lower)) return collectionsFound.push({ category });
        })

        if(collectionsFound.length === 0){
            return res.json({error: 'No Result'})
        }
        return res.json(collectionsFound)
    })
})