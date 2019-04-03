const express = require('express')
const app = express()

app.get('/', (request, response, nextHandler) => {
	response.status(200).send('Hey there ExpressJS on standby')
})

app.listen(
	1337,
	() => console.log('Web server running on le port 1337, buddy'),
)
