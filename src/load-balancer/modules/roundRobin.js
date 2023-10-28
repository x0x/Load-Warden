let currentServer = 0;

function selectServer(servers) {
    const availableServers = servers.filter(server => server.isHealthy);

    if (availableServers.length === 0) {
        return null;
    }

    const selectedServer = availableServers[currentServer % availableServers.length];
    currentServer++;

    return selectedServer;

}

module.exports = {
    selectServer: selectServer,
};