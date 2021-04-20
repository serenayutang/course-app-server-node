require('dotenv').config();
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const uri = process.env.MONGODB_URI;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const mongoose = require('mongoose');
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

//configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


const demo = require('./controllers/demos-controller')
demo(app)

// const quizzesController = require('./controllers/quizzes-controller')
// quizzesController(app)

require("./controllers/quizzes-controller")(app)
require("./controllers/question-controller")(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(process.env.PORT || 4000)
console.log("Your node server is running!")
