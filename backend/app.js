// mongodb+srv://abdullah456:<password>@mevn.ftnxx2i.mongodb.net/?retryWrites=true&w=majority

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const uri = require('./pass')
// Create Express App

const app = express()

// Database 

mongoose.connect(uri)
.then(() => {
    console.log('MongoDB Connected');
})
.catch(err => console.log(err))

app.use(bodyParser.json())

// Routes
app.get('/', (res, req) => {
    res.send('Home Page')
})

// const TodosRoute = require('./routes/Todos')
// app.use('/todos', TodosRoute)

// Start Server
app.listen(3000, () => {
    console.log("Listening");
})
