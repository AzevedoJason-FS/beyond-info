const express = require('express');
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require('cors');
const emailCtrl = require ('./controllers/emails')
const limiter = require('./middleware/rate-limiter');

// Connect to MongoDB
const connectMongo = async () => {
    try{
        const conn = mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,    
        })
        console.log(`MongoDB connected`)
    }
    catch (error){
        console.log(error);
        process.exit(1);
    }
}

app.use(limiter);
app.enable('trust proxy');
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/newsletter', emailCtrl.addEmail)
app.get('/newsletter-total', emailCtrl.getTotalUsers)

//Connect to MongoDB before listening
connectMongo().then(() => {
    app.listen(8080, () => {
        console.log(`Ready for Requests`)
    })
})



