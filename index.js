const express = require("express");
const http = require("http");
const port = 8000;
const app = express();

const servers = require("./server/server.json");

let currentServer = 0;

app.get('/', async(req, res) => {

    // Round-robin load balancing
    const selectedServer = servers[currentServer];
    currentServer = (currentServer + 1) % servers.length;

    const options = {
        hostname: selectedServer.host,
        port: selectedServer.port,
        path: '/',
        method: 'GET',
    };

    const backendReq = http.request(options, backendRes => {
        backendRes.pipe(res);
    });

    backendReq.on('error', error => {
        console.error(`Problem with request to backend server: ${error.message}`);
        res.status(500).send('An error occurred');
    });

    backendReq.end();
});

app.listen(port, () => {
    console.log(` Load Balancer Running on port ${port}`);
});