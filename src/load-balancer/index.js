const express = require("express");
const http = require("http");
const port = 8000;
const app = express();

const servers = require("../backend-servers/server.json");
const { periodicHealthCheck } = require("./modules/healthCheck");
const { selectServer } = require("./modules/roundRobin");

// default health check period to 10 seconds
const healthCheckPeriod = process.argv[2] || 1000;

setInterval(() => {
    periodicHealthCheck(servers, healthCheckPeriod);
}, healthCheckPeriod);

app.get('/', async(req, res) => {

    const selectedServer = selectServer(servers);

    if (!selectedServer) {
        res.status(500).send('No server available');
        return;
    }

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