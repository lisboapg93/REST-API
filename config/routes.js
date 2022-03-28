const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = express.Router()

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.jason())
app.use(cors())
app.use(routes)


app.listen(2199, () => {
    console.log('Express started at http://localhost:2199')
})
