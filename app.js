const express = require('express')
const connectDB = require('./db/connect_db')
const app = express()
var session = require('express-session')
var flash = require('connect-flash');
const port = 3000
const web = require('./routes/web')

var bodyParser = require('body-parser')
connectDB()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
    
  }));
  app.use(flash());


// ejs setup
app.set('view engine','ejs')


// for static files
app.use(express.static('public'))







// router load
app.use('/',web) 









app.listen(port, ()=>{
    console.log(`server start localhost: ${port}`)
})
