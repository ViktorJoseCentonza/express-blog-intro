const express = require("express");
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`my-blog listening on port http://localhost:${port}`);
})
console.log("serverside running");


app.get('/', (req, res) => {
    res.send("server del mio blog")
})
