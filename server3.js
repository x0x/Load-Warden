const express = require('express');
const app = express();

const port = 8003;

app.get('/', (req, res) => {
    res.send(`Hello From Server 3 running at http://localhost:${ port }`);
});

app.listen(port, () => {
    console.log(`Server 3 started on port ${port}`);
});