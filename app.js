const express = require('express')
const app = express()
const users = require('./db/user')

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/getUsers', function(req, res) {
    res.json(users)
})

app.get('/getUserById/:id', (req, res) => {
    // res.json(users.find(user => user.id === req.params.id))
    var id = req.params.id
    res.json(users.find(user => user.id === id))
})

app.get('/getUserByParam', (req, res) => {
    // wait for request param from get method
    var id = req.query.id
    
    // this is older format
    //var id = req.body('id')

    res.setHeader('Content-Type', 'application/json');

    // res.send(JSON.stringify({ a: 1 }, null, 3));

    res.json(users.find(user => user.id === id))
})

app.listen(8888, () => {
    console.log('Starting server at port 8888')
})