/*
Example showing how to use the driver in a stand-alone application,
i.e., not using vytronics.hmi SCADA system.

Run this in a console with node
$ node stand-alone.js

Connect a modbus ASCII serial master and write to 40001 or 40004.

*/


var mb = require('modbus.async');

//Driver config object
var slave_config = {
    type: 'serial.slave',
    mode: 'ascii',
    address: 1,
    serial_port: {
        port_name: 'COM10',
        port_options: {
            baudrate: 9600,
            dataBits: 8,
            parity: 'none'
        }
    }
};

var slave = mb.create(slave_config);

//Register various integer items
slave.register('n:0');  //register 0
slave.register('n:3');  //register 3
slave.register('n:3.0');    //register 3 bit 0

//Listener will get called anytime an above registered item changes
//value.
slave.on('itemvalue', function(itemname, value, quality){
    console.log('itemvalue name:' + itemname + ' value:' + value);
});

//Start the slave
slave.start();

//Shutdown after 5 minutes
setTimeout( function(){
    slave.stop();
}, 5*60*1000);
