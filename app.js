const express = require('express')
const app = express()
const users = require('./db/user')

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/getUsers', function(req, res) {
    res.send(users)
})

app.listen(8888, ()=>{
    console.log('Starting server at port 8888')
})