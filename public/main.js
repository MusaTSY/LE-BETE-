const express = require('express');
const app = express()
const port = 3000


app.use(express.static("./public"))

app.get('/', function (request, response){
response.sendFile(__dirname + './public/index.html');
});

app.get("/faq", function (request, response){
    response.sendFile(__dirname + './public/faq.html');

});

app.listen(port, () => console.log ('App is listening on port ${port}!'))