const express = require('express');
const app = express()
const port = 3000

//Using Express and Node to create a server on port 3000
//Total packages used are 3: express, ejs, and nodemon
//Serving static files from the public folder and using EJS as the view engine

app.use(express.static("./public"))

app.set("view engine", "ejs")

app.listen(port, () => console.log(`App is listening on port ${port}!`))