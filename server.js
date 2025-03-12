const express = require("express");
const app = express()
const port = 3000

const postList = [
    {
        title: "ciambellone",
        content: "lorem1",
        img: '/img/ciambellone.jpeg',
        tags: ["lorem1", "lorem2", "lorem3"],
    },
    {
        title: "cracker barbabietola",
        content: "lorem1",
        img: '/img/cracker_barbabietola.jpeg',
        tags: ["lorem1", "lorem2", "lorem3"],
    },
    {
        title: "pane fritto dolce",
        content: "lorem1",
        img: '/img/pane_fritto_dolce.jpeg',
        tags: ["lorem1", "lorem2", "lorem3"],
    },
    {
        title: "pasta barbabietola",
        content: "lorem1",
        img: '/img/pasta_barbabietola.jpeg',
        tags: ["lorem1", "lorem2", "lorem3"],
    },
    {
        title: "torta paesana",
        content: "lorem1",
        img: '/img/torta_paesana.jpeg',
        tags: ["lorem1", "lorem2", "lorem3"],
    }
]

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`my-blog listening on port http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send("server del mio blog")
})

app.get('/bacheca', (req, res) => {
    res.json(postList)
})