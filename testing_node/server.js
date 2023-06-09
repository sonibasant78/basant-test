
const http = require('http') // http module
require('dotenv').config() // env configuration
const bodyParser = require('body-parser') // post me use hoga json parse 

// these steps connect express to nodejs
const express  = require('express')
const app = express()
const server = http.createServer(app)

// use express functions 
var cors = require("cors");
const { auth, admin, user } = require('./src/routes')
app.use(cors())
app.use(bodyParser.json());
app.use(express.json());

//using middlewares
app.use("auth",auth)
app.use("admin",admin)
app.use("user",user)

//connecting server to some port
server.listen(process.env.PORT,() => {
    console.log("server started at",process.env.PORT);
})