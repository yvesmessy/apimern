const express = require('express')
const app = express()

app.get('/one', 
	(request, response, nextHandler) => {
	response.type('text/plain')
	response.write('Request received ')
	nextHandler()
})

app.get('/one', 
	(request, response, nextHandler) => {
	response.status(200).end('ps hello world!')
})

app.get('/two',
	(request, response, nextHandler) => {
	response.type('text/plain')
	response.write('Another Request received ')
	nextHandler()
	},

	(request, response, nextHandler) => {
		response.status(200).end('ps bonjour le monde!')
	}
)


app.listen(
	1337,
	() => console.log('Web server for this application programming interface running on port 1337'),

)

