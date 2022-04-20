var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const PORT = 3001;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

http.listen(PORT, function () {
    console.log('ouvindo *:' + PORT);
});

io.on('connection', function (socket) {
    console.log("um usuário se conectou!", socket.id)
    socket.on('msg', (msg) =>{
        //o servidor envia uma mensagem para todos da rede
        socket.broadcast.emit('msg', msg)
    })
});
io.on('disconnect', function(socket) {
    console.log('usuário desconectado',socket.id);
 
});