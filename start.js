npm install peer
peerjs --port 9000 --key peerjs
var PeerServer = require('peer').PeerServer;
var server = PeerServer({port: 9000, path: '/myapp'});