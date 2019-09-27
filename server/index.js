require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
// const authCtrl = require('./controllers/authController')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

// app.post('/api/auth/register', authCtrl.register)
// app.post('/api/auth/login', authCtrl.login)
// app.get('/api/posts/:userid',)
// app.post('/api/post/:userid',)
// app.get('/api/post/:postid',)
// app.delete('/auth/logout', authCtrl.logout)



massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} on station!`))
})

