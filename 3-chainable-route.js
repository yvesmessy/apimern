const express = require('express')
const app = express()

app
.route('/home')
.get((request, response, nextHandler) => {
	response.type('text/html')
	response.write('<!DOCTYPE html>')
	nextHandler()
})
.get((request, response, nextHandler) => {
	response.end(`
		<html lang="en">
			<head>
			<meta charset="utf-8">
			</head>
			<body role="application">
				<form method="post" action="/home">
					<input type="text" />
					<button type="submit">Submit</button>
				</form>
			</body>
		</html>
		`)
})

.post((request, response, nextHandler) => {
	response.send('Got it boss!')
})


app.listen (
	1337,
	() => console.log('Just so you know, the web server is running on port 1337'),
)
