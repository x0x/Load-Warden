const express = require('express');
const app = express();

const port = 8001;

app.get('/', (req, res) => {
    res.send(`Hello From Server 1 running at http://localhost:${ port }`);
});

app.listen(port, () => {
    console.log(`Server 1 started on port ${ port }`);
});