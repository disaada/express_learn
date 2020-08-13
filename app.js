const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 4000

app.use(cors())
app.use(bodyParser())

/*app.get("/", (req, res) => {
	const starwar = {"name": "Luke Skywalker"}

	//merubah string menjadi bentuk JSON yang valid dengan JSON.stringify
	const retJson = JSON.stringify(starwar)
	const cb = () => {res.send(retJson)}
	setTimeout(cb, 1)
})*/

app.post('/', (req, res) => {
	console.log(req.body)
	res.send(req.body)
})

app.listen(port, '0.0.0.0', () => {
	console.log(`Example app listening as http://localhost:${port}`)
})