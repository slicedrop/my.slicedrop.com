

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(1337);

io.sockets.on('connection', function(socket) {
  
  var events = ['client-ui-sync',
                'client-camera-sync',
                'client-volume-sync',
                'client-labelmap-sync',
                'client-mesh-sync',
                'client-scalars-sync',
                'client-fibers-sync',
                'client-fibersscalars-sync'];

  for (e in events) {
    var e = events[e];
    socket.on(e, function(e, msg) {
      socket.broadcast.emit(e, msg);
    }.bind(this, e));
  }

});
