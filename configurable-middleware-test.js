const express = require('express')
const loggerMiddleware = require('./middleware-logger')
const app = express()

app.use(loggerMiddleware({
	enable: true,
}))

//listen on port 1337 for new connections

app.listen(
	1337,
	() => console.log('Web server for this app running on port 1337'),

)

