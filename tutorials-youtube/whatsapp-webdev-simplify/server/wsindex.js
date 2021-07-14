 
/*
const wss = new WebSocket.Server({
  port: 8080,
  perMessageDeflate: {
    zlibDeflateOptions: {
      // See zlib defaults.
      chunkSize: 1024,
      memLevel: 7,
      level: 3
    },
    zlibInflateOptions: {
      chunkSize: 10 * 1024
    },
    // Other options settable:
    clientNoContextTakeover: true, // Defaults to negotiated value.
    serverNoContextTakeover: true, // Defaults to negotiated value.
    serverMaxWindowBits: 10, // Defaults to negotiated value.
    // Below options specified as default values.
    concurrencyLimit: 10, // Limits zlib concurrency for perf.
    threshold: 1024 // Size (in bytes) below which messages
    // should not be compressed.
  }
});*/

const fs = require('fs');
const http = require('http');
const WebSocket = require('ws');

const server = http.createServer({
  ///cert: fs.readFileSync('/path/to/cert.pem'),
 /// key: fs.readFileSync('/path/to/key.pem')
});
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  
    console.log(ws);

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});
console.log("listening on port 8080")
server.listen(8080);

