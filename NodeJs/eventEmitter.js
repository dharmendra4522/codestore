// Event Emitter - A simple implementation of an event emitter in JavaScript.

const EventEmitter = require('events');
const user = new EventEmitter();

user.on('login', (username) => {
    console.log(`${username} has logged in.`);
});

user.on('logout', (username) => {
    console.log(`${username} has logged out.`);
});

// Emitting events
user.emit('login', 'Dharmendra');
user.emit('logout', 'Dharmendra');