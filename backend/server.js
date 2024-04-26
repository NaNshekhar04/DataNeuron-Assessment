const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv  = require('dotenv').config();
const mongoose = require('mongoose');
const routes = require('./routes/homeRoutes');
const PORT = 4000;


mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('MongoDB connection successful');
    }).catch((err)=>{
        console.log('Connection to MongoDB failed', err);
    });



app.use(bodyParser.json());
app.use('/api', routes);

app.listen(PORT, ()=>{
    console.log(`Server Up and running at port ${PORT}`);
})