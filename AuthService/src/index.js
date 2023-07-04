const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use('/new',(req,res)=> {
    return res.json({new: "baivietmoi"})
})
app.use('/',(req,res)=> {
    return res.json({hello: "buikhactao"})
})


// bui khac tao coded authservice
app.listen(3001, ()=> {
    console.log("server is running http://localhost:3000")
})