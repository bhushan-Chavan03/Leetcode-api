import express from 'express';
import contestRoute from './routes/contestRoute.js';
import noSolvedQuestionsRoute from './routes/noSolvedRoute.js'; 
import badgesRoute from './routes/badgesRoute.js'
import mongoose from 'mongoose';


const dbURI = 'mongodb+srv://bhushanc2003:gRLsQsztAqbg2sRS@cluster0.zjhd8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
mongoose.connect(dbURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });


const app = express();

app.use('/contestRating', contestRoute);
app.use('/noSolvedQuestions', noSolvedQuestionsRoute); 
app.use('/badges', badgesRoute); 

app.listen(8000);
