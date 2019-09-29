require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const ctrl = require('./controller')
// const authCtrl = require('./controllers/authController')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET
}))

// app.use((req, res, next) => {
//     const db = req.app.get('db')
//     req.db = db;
//     next()
// })

const connectDB = (req, res, next) => {
    const db = req.app.get('db')
    req.db = db;
    next()
}

app.post('/api/auth/register', ctrl.register)
app.post('/api/auth/login', ctrl.login)
app.get('/api/posts/:me', ctrl.getPosts)
app.get('/api/user', ctrl.getId)
app.get('/api/posts', connectDB, ctrl.postSearch)
// app.post('/api/post/:userid',)
app.get('/api/post', ctrl.singlePost)
app.post('api/auth/logout', ctrl.logout)



massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} on station!`))
})

