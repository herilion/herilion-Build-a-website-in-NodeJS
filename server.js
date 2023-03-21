const express = require('express');
const app = express();
const port=3000;

app.get('/', (req,res) => {

	res.sendFile(__dirname + '/NiceAdmin/index.html')
})
app.use('/',express.static(__dirname + '/NiceAdmin'))
app.listen(3000, () => {
	console.log("server is running on port " + port)
})