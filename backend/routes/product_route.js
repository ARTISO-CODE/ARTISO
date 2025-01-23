const express = require('express');
const router = express.Router();
const product_Collection = require('../models/product_Collection');
const image_Collection = require('../models/image_Collection');
const { upload_images } = require('../middlewares/FileStorage');
const fs = require('fs');

const { BaseUrl } = require('../keys');

// *************** Products ****************
router.post('/add_products', upload_images.array('productImages', 10), (req, res) => { 
    const { name, price, old_price, category, collection, in_stock, details, care, artisans } = req.body;
    let { alt } = req.body;
    
    if(!name || !price || !category || !collection || !details || !care || !artisans) res.json({ error: 'fill all the necessary fields' })
    if(!in_stock) in_stock = true;
    if(!alt) alt = "artisanat marocain";

    const soldRate = Math.floor((old_price - price) * (100/old_price));

    let files = req.files;
    if(!files) res.json({ error: 'add images!' })
    
    let myFilesNames = []
    let myFilesURLs = []
    files.map(file => {
        let fileName = file.originalname.split('.')[0];
        let fileType = file.mimetype.split('/')[1];
        let fileNameWithExtension = `${fileName}.${fileType}`;

        myFilesNames.push(fileNameWithExtension);
        myFilesURLs.push(`${BaseUrl}/static/images/${fileNameWithExtension}`);
    })

    product_Collection.findOne({ name })
    .then(product => {
        if(product) res.json({ message: 'Already exist'+ product })
        else{             
            const newProduct = new product_Collection({
                name,
                images: myFilesURLs,
                price,
                old_price,
                soldRate,
                created_at: new Date().toUTCString(),
                category,
                collection,
                in_stock,
                details
                /*artisans*/
            });
            newProduct.save()
            .then((savedProduct) => {

                myFilesNames.forEach((myFileNameWithExtension, index) => {
                    fs.rename(`./uploads/images/${files[index].filename}`,`./uploads/images/${myFileNameWithExtension}`, () => {
                        const newImage = new image_Collection({
                            name: myFileNameWithExtension.split('.')[0],
                            imageURL: `${BaseUrl}/static/images/${myFileNameWithExtension}`,
                            imageType: myFileNameWithExtension.split('.')[1],
                            alt,
                            used: true,
                            whereUsed: 'products',
                            productID: savedProduct._id
                        })
                        newImage.save()
                    })
                })

                res.json({ message: 'product added successfully'})
            })
            .catch(err => res.json({ error: 'Error in: product_route:add_products:newProducts.save() :' +err }))
            
        }
    })

})

router.get('/delete_all_products', (req, res) => { 
    product_Collection.find()
    .then(products => products.forEach(async (product) => {
        // delete the image
        product.images.forEach(async (image) => {
            let imageList = image.split('/');
            console.log('IMAGE URL ??? : ' +imageList);
            console.log('IMAGE !!! : '+imageList[imageList.length -1]);
            let filePath = 'uploads/images/'+imageList[imageList.length -1];
            fs.unlinkSync(filePath);
            await image_Collection.findOneAndDelete({ name: imageList[imageList.length -1].split('.')[0] })
        })
        // delete the product
        await product_Collection.findByIdAndDelete(product._id)
    }))
    .then(() => res.json('all products removed') )
    .catch(err => res.json(err))
})




// ***************************************************************
router.post('/show_products', (req, res) => {
    const { category } = req.body;

    if(category){
        product_Collection.find({ category })
        .sort({ name: 1 })
        .then(products => {
            if(products) res.json(products);
            else res.json({noProduct: 'no products is available within that category'})
        })
        .catch(err => res.json({ error: err }))
    }
    else{
        product_Collection.find()
        .sort({ name: 1 })
        .then(products => {
            if(products) res.json(products);
            else res.json({noProduct: 'no products is available' })
        })
        .catch(err => res.json({ error: err }))
    }
})

router.post('/search_products', (req, res) => {
    const { search_string } = req.body;

    if(!search_string) return res.json({empty_error: 'search Empty'})

    const search_str_Lower = search_string.toLowerCase();

    book_Collection.find()
    .then(products => {
        let productsFound = []

        products.map(product => {
            const productName = product.name.toLowerCase();

            if(productName.startsWith(search_str_Lower)){
                return productsFound.push(product)
            }
        })

        if(productsFound.length === 0){
            return res.json({error: 'No product for that search'})
        }
        return res.json(productsFound)
    })
})

router.get('/get_product/:id', (req, res) => {
    product_Collection.findById(req.params.id)
    .then(product => {
        if(!product) res.json('no product with this id');
        else res.json(product);
    })
    .catch(err => console.log({ error: `get_product: ${+err}` }))
})

module.exports = router;