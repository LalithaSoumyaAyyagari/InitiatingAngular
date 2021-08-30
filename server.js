const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(__dirname + 'InitiatingAngular/dist/first'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'InitiatingAngular/dist/first/index.html');
})

app.listen(port, () => {
    console.log("Server running on http://localhost:"+port);
})