const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MONGO_URL } = require('./keys');
const cors = require('cors');

// to see images stored in that path -- after this line of code you can see the images by typing "localhost:8000/static/nameOfTheFile"
app.use("/static/product_images", express.static("./uploads/product_images"));
app.use("/static/images", express.static("./uploads/images"));

//App config
const PORT = process.env.PORT || 8000
app.use(cors())

// Mongodb Config
mongoose.connect(MONGO_URL)
.then(() => console.log('Connected'))
.catch(err => console.log('Failed to connect: ', err.stack));

mongoose.connection.on('connected', ()=> console.log('Connected to artisoDB DataBase'))
mongoose.connection.on('error', (err) => console.log(`ERROR: ${err}`))

//general MiddleWare
app.use(express.json())

//routes
app.use('/api', require('./routes/emailList_route'));
app.use('/api', require('./routes/product_route'));

// listen to port
app.listen(PORT, () => console.log(`server running on PORT:${PORT}`))