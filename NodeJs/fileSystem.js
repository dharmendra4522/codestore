const fs = require('fs');

fs.writeFileSync('first.txt', 'Hello'); 
fs.appendFile('first.txt', ' World!', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    }
}); 

