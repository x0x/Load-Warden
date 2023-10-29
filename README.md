# Dynamic Load Balancer with Health Checks

Developed using Node.js and the Express library, the project serves as a dynamic load balancer that sits in front of a group of servers and routes client requests to the servers capable of fulfilling those requests. The primary intent is to minimize response time, maximize resource utilization, and ensure no server gets overloaded. If a server goes offline, the load balancer redirects the traffic to the remaining online servers. Conversely, when a new server is added, it automatically starts receiving requests.

## Project Goals
- Build a load balancer capable of routing traffic to two or more servers.
- Implement continuous health checks on backend servers.
- Enable automated handling of servers going offline due to failing a health check.
- Facilitate the seamless reintegration of servers coming back online after passing a health check.
By achieving these objectives, this load balancer offers a comprehensive solution for optimizing resource allocation, maintaining high availability, and ensuring resilience in distributed systems.


## Features

- #### Intelligent Routing 
    Utilizes a Round-Robin algorithm to distribute incoming client requests evenly across multiple backend servers.


- #### Health Monitoring
    Performs continuous health checks on all backend servers, ensuring they are available and responsive.


- #### Automated Failover
    In the event that a server fails a health check, the load balancer automatically redirects traffic to the remaining operational servers.


- #### Configurable Parameters
    Allows customization of health check intervals and endpoints via command-line arguments, giving users more control over the behavior of the load balancer.

- #### Scalability
    Easily add or remove servers from the pool without disrupting the load balancer's operation, making it suitable for dynamically scaling environments.


## Run Locally

Clone the project

```bash
  git clone https://github.com/x0x/Load-Warden.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server in different terminals.

```bash
  node src/backend-servers/server1.js
```
```bash
  node src/backend-servers/server2.js
```
```bash
  node src/backend-servers/server3.js
```

Run the Load-Balancer server

```bash
  node src/load-balancer/index.js
```


## Running Tests


To validate the load balancer's ability to distribute requests efficiently, you can run multiple concurrent requests using curl.

Execute the following command to initiate the tests:

```bash
  curl --parallel --parallel-max 3 --config test/urls.txt
```

Feel free to adjust the --parallel-max option to control the level of parallelism to suit your testing needs.

## Acknowledgements

 - [Coding Challenges By John Crickett](https://codingchallenges.fyi/challenges/challenge-load-balancer)
