const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const users = require('./db/user')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/users', function(req, res) {
    res.json(users)
})

app.get('/users/:id', (req, res) => {
    // res.json(users.find(user => user.id === req.params.id))
    const id = req.params.id
    res.json(users.find(user => user.id === id))
})

app.get('/getUserByParam', (req, res) => {
    // wait for request param from get method
    const id = req.query.id
    
    // this is older format
    //var id = req.body('id')

    res.setHeader('Content-Type', 'application/json');

    // res.send(JSON.stringify({ a: 1 }, null, 3));

    res.json(users.find(user => user.id === id))
})

app.post('/users', (req, res) => {
    const user = req.body
    users.push(user)
    res.setHeader('Content-Type', 'application/json');
    res.status(201)
        .send(JSON.stringify({ status:  "success"}, null, 3));
})

app.put('/users/:id', (req, res) => {
    const id = req.params.id 
    const updateIndex = users.findIndex(user => user.id === id)
    const user = req.body
    res.json(Object.assign(users[updateIndex], user))

})

app.delete('/users/:id', (req, res) => {
    const id = req.params.id
    const deleteIndex = users.findIndex(user => user.id === id)
    users.splice(deleteIndex, 1)
    res.status(204).send()

})

app.listen(8888, () => {
    console.log('Starting server at port 8888')
})