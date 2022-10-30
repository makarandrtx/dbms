const express = require('express');
const app = express();
const port = 9001;

app.get('/', (req, res) => {
    res.send("Home Route active");
})

app.get('/about', (req, res) => {
    res.send({msg: "Hello World, About route is active"});
})

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})