const express = require('express');

const app = express();


//http://localhost:33333 <-raiz
app.get('/', (req, res) => {
    return res.send("Hello World");
})
app.listen(3333);