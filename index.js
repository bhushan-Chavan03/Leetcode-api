import express from 'express';
import contestRoute from './routes/contestRoute.js';
import noSolvedQuestionsRoute from './routes/noSolvedRoute.js'; 
import badgesRoute from './routes/badgesRoute.js'
import homeRouter from './routes/homeRouter.js'
import mongoose from 'mongoose';
import 'dotenv/config';




const dbURI = process.env.MONGODB_URI; 
mongoose.connect(dbURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });


const app = express();

app.use('/', homeRouter);
app.use('/contestRating', contestRoute);
app.use('/noSolvedQuestions', noSolvedQuestionsRoute); 
app.use('/badges', badgesRoute); 

app.listen(8000);
