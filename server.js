const express = require('express');
const app = express()
const port = 3000

//Using Express and Node to create a server on port 3000
//Total packages used are 2: express and nodemon
//Serving static files from the public folder

app.use(express.static("./public"))

app.listen(port, () => console.log(`App is listening on port ${port}!`))
