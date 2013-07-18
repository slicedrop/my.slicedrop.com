Pusher = function() {

  this._socket = null;

};

Pusher.prototype.subscribe = function() {

  var url = 'http://'+window.location.host+":1337";
  this._socket = io.connect(url);
  console.log('connecting via mypusher to ', url)

  return this;
	
};

Pusher.prototype.bind = function(event, callback) {

  this._socket.on(event, callback);

};

Pusher.prototype.trigger = function(event, data) {

  this._socket.emit(event, data);

};