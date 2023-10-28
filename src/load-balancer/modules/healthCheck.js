const http = require('http');

async function healthCheck(server) {
    const options = {
        hostname: server.host,
        port: server.port,
        path: '/',
        method: 'GET',
    };

    const req = http.request(options);

    req.on('response', (res) => {
        server.isHealthy = (res.statusCode === 200);
    });

    req.on('error', () => {
        server.isHealthy = false;
    });

    req.end();
}

async function periodicHealthCheck(servers, healthCheckPeriod) {
    for (const server of servers) {
        await healthCheck(server);
    }
}

module.exports = {
    healthCheck,
    periodicHealthCheck,
};