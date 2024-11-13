const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('../backend/Routes/AuthRouter')
const CourseRouter = require('../backend/Routes/CourseRouter')

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;

app.get('/ping',(req,res)=>{
    res.send('PONG')
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter)

app.use('/course',CourseRouter)

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)

})