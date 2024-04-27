const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv  = require('dotenv').config();
const mongoose = require('mongoose');
const routes = require('./routes/userRoutes');
const PORT = process.env.PORT;
const cors = require('cors');


mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('MongoDB connection successful');
    }).catch((err)=>{
        console.log('Connection to MongoDB failed', err);
    });

    const corsOptions = {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    };
    app.use(cors(corsOptions));

    
    
app.use(bodyParser.json());
app.use('/api', routes);

app.listen(PORT, ()=>{
    console.log(`Server Up and running at port ${PORT}`);
})