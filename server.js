//Using Node's express framework to setup a connection via port 3000
//Total packages used are 2: express and nodemon

const express = require('express');
const app = express()
const port = 3000

//Serving static files from the public folder
app.use(express.static("./public"))

app.listen(port, () => console.log(`App is listening on port ${port}!`))
