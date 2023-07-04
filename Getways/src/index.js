const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const {createProxyMiddleware } = require('http-proxy-middleware')


const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())

const AuthProxy = createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true
})
const SongProxy = createProxyMiddleware({
    target: 'http://localhost:3002',
    changeOrigin: true
})

app.use('/auth', AuthProxy)
app.use('/song', SongProxy)

app.listen(3000, ()=> {
    console.log('serve getways is running http://localhost:3000')
})