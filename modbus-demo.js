var server = require("vytronics.hmi");

server.start();

console.log('Goto URL localhost:8000/PointPanel.html to see your tags.');
console.log('You need to connnect a serial modbus ASCII master and write to 40001 or 40002 to see values change.');

