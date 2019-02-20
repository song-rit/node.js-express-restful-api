const express = require('express')
const bodyParser = require('body-parser')
// const request = require('request')
const sync_request = require('sync-request')

const app = express()
// const users = require('./db/user')

const PORT = 8888

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/sss_collection_photo', (req, res) => {
    
    // wait for request param from get method
    const contract_no = req.query.contract_no
    console.log('contract_no: ', contract_no)

    var json_result = {
        'contract_no': contract_no
    }

    res.setHeader('Content-Type', 'application/json');

    // create json body
    var myJSONObject = {
        "user_name": "adminfx|SCS|G2iOJxmBmQPHhFhL/+7+C3JSQflDl8x+ev642DrGFdQ=",
        "data": {
            "contract_no": [
                contract_no
            ]
        }
    }
    // request http
    var syncRes = sync_request('POST', 'http://localhost:9253/api/collection/getSSSPhotoFieldByContractNo', {
      json: myJSONObject,
    });
    
    var responseString = syncRes.getBody('utf8')
    var responseJson = JSON.parse(responseString);
    res.json(responseJson)
})

app.get('/sss_collection_gps', (req, res) => {
    // wait for request param from get method
    const contract_no = req.query.contract_no
    console.log('contract_no: ', contract_no)

    var json_result = {
        'contract_no': contract_no
    }

    res.setHeader('Content-Type', 'application/json');

    // create json body
    var myJSONObject = {
        "user_name": "adminfx|SCS|G2iOJxmBmQPHhFhL/+7+C3JSQflDl8x+ev642DrGFdQ=",
        "data": {
            "contract_no": [
                contract_no
            ]
        }
    }

    // request http
    var syncRes = sync_request('POST', 'http://localhost:9253/api/collection/getSSSGpsFieldByContractNo', {
      json: myJSONObject,
    });
   
    var responseString = syncRes.getBody('utf8')
    var responseJson = JSON.parse(responseString);
    res.json(responseJson)

})


app.listen(PORT, () => {
    console.log('Starting server at port ' . PORT)
})