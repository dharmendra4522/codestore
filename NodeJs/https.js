// Http vs Https in Node.js - 
// In Node.js, both the http and https modules are used to create web servers and handle HTTP requests. However, they differ in terms of security and the protocols they support.
// 1. Protocol Support:
// - http: The http module is used to create servers that support the HTTP protocol. It does not provide any built-in security features and is typically used for non-secure communication.
// - https: The https module is used to create servers that support the HTTPS protocol, which is a secure version of HTTP. It provides built-in security features such as SSL/TLS encryption, which helps protect data transmitted between the client and server from eavesdropping and tampering.
// 2. Security:
// - http: Since the http module does not provide any security features, it is vulnerable to various types of attacks, such as man in the middle attacks, where an attacker can intercept and modify the data being transmitted between the client and server. 

const http = require('http');

// const req = https.get('https://www.google.com', (res) => {
//     console.log(`Status Code: ${res.statusCode}`);
//     res.on('data', (chunk) => {
//         console.log(`Data chunk: ${chunk}`);
//     });
//     res.on('end', () => {
//         console.log('No more data in response.');   
//     });
// });

const server = http.createServer((req, res) => {
    console.log(req.headers);
    console.log(`Received request for: ${req.url}`);
    res.writeHead(201, { 'Content-Type': 'text/plain' });
    switch (req.url) {
        case '/':
            res.write('Welcome to the home page!');
            break;
        case '/about':
            res.write('This is the about page.');
            break;
        case '/contact':
            res.write('Contact us for learning Node.js!');
            break;
        default:
            res.write('Page not found!\n');
    }
    res.end('Hello from the HTTP server!');
});

const PORT = 8000;

server.listen(PORT, () => {
    console.log(`HTTP server is running on port ${PORT}`);
});  