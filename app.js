const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/", (req, res) => {
    const result = eval(req.body.operation);
    res.send({result});
});

app.listen(port, () => console.log(`Running on port ${port}`));