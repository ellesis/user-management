const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/customers', (req, res) => {
  res.send([
    {
      'id': 1,
      'image': 'http://placeimg.com/64/64/1',
      'name': 'Alex',
      'birthday': '991222',
      'gender': 'Male',
      'job' : 'Student'
    },{
      'id': 2,
      'image': 'http://placeimg.com/64/64/2',
      'name': 'Julia',
      'birthday': '051222',
      'gender': 'Female',
      'job' : 'Student'
    },{
      'id': 3,
      'image': 'http://placeimg.com/64/64/3',
      'name': 'Lisa',
      'birthday': '791222',
      'gender': 'Female',
      'job' : 'Student'
    }
  ])
})

app.listen(port, ()=>console.log(`Listening on port ${port}`))