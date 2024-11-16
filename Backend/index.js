const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const CourseRouter = require('../Backend/Routes/CourseRouter')
const AuthRouter = require('../Backend/Routes/AuthRouter')

require('dotenv').config();
require('./Models/db')
const PORT = process.env.PORT || 8080 ;

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter)

app.use('/course',CourseRouter)

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
})