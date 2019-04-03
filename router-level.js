
const express = require('express')
const app = express()
const router = express.Router()

router.use((request, response, next) => {
	console.log('URL:', request.originalUrl)
	next()
})

app.use('/router', router)

app.listen(
	1337,
	() => console.log('Your web server is running on post 1337'),
)
