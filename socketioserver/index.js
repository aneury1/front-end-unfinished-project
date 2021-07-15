const httpServer = require('http').createServer();

const io = require('socket.io')(httpServer,{
     cors:{
         origin:'*'
     }
});


io.on('connection', (socket)=>{
   /// console.log("client query ->" + JSON.stringify(socket.handshake.query));
   /// console.log("client headers ->" + JSON.stringify(socket.handshake.headers));
   /// console.log(socket.id);
 
    socket.on("message", (arg)=>{
        console.log(arg);
    })


    io.on('message', function(){
        console.log("message incomming from ");
    })
  
    ///io.emit('data', {'fdff':1});
    io.emit('dataset', {'fdffsdata':134223});

});

///console.log(httpServer.Agent);

////Object.keys(httpServer).forEach(k=>console.log( k));

console.log("Client can connect on port 3000");
httpServer.listen(3000);
