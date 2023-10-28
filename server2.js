const express = require('express');
const app = express();

const port = 8002;

app.get('/', (req, res) => {
    res.send(`Hello From Server 2 running at http://localhost:${ port }`);
});

app.listen(port, () => {
    console.log(`Server 2 started on port ${port}`);
});