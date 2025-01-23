const express = require('express');
const router = express.Router();
const category_Collection = require('../models/category_Collection');

// *************** Category of product ****************
router.get('/show_all_categories', (req, res) => {
    category_Collection.find()
    .then(categories => res.json(categories))
    .catch(err => res.json({ error: 'Error in: book_route:show_all_categories:catch() ' +err }) )
})

router.post('/add_category', (req, res) => {
    const { name } = req.body;
    if(!name) res.json({ error: 'there is no category name'});

    category_Collection.findOne({ name })
    .then(category => {
        if(category) res.json({ error: 'already exist' });
        else{
            const newCategory = new category_Collection({ 
                name,
                created_at: new Date().toUTCString()
            })
            newCategory.save()
            .then(savedCategory => res.json({ message: `${savedCategory.name} category is successfuly saved` }))
            .catch(err => res.json({ error: 'Error in: category_route:add_category:newCategory.save() ' +err }))
        }
    })
})

router.get('/delete_all_categories', (req, res) => {
    category_Collection.find()
    .then(categories => categories.forEach(category => {
        category_Collection.findByIdAndDelete(category._id)
        .then(() => res.json('all categories successfuly deleted'))
    }))
    .catch(err => res.json('error delete_all_categories: | ' +err))
})

router.post('/delete_category', (req, res) => {
    const { id } = req.body;
    if(!id) res.json({ error: 'there is no category id'});

    category_Collection.findByIdAndDelete(id)
    .then(() => res.json({ message: 'successfuly deleted' }) )
    .catch(err => res.json({ error: 'there is no category with that id :' +err }) )
})

router.post('/search_category', (req, res) => {

    const { search_string } = req.body;
    if(!search_string) res.json({ Empty_error: 'there is no message' })

    const search_str_lower = search_string.toLowerCase();

    category_Collection.find()
    .then(categories => {
        let categoriesFound = []

        categories.map(category => {
            const name = category.name.toLowerCase();

            if(name.startsWith(search_str_lower)) return categoriesFound.push({ category });
        })

        if(categoriesFound.length === 0){
            return res.json({error: 'No Result'})
        }
        return res.json(categoriesFound)
    })
})