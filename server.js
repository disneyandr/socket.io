const express = require('express');
const path = require('path');
const app = express();

// const tmi = require('tmi.js');

//configurando o http e websocket
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//definido a pasta onde ficarão os arquivosw frontend da aplicação
app.use(express.static(path.join(__dirname, 'src')));

//definindo onde irão ficar as views
app.set('views', path.join(__dirname, 'src'));

//definindo o uso do html para  visualização
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//quando o endereço do servidor padrão for acessado, renderiza a view index.html
app.use('/', (req, res) => {
    res.render('index.html');
});

io.on('connection', (socket) => {
    console.log('New connection',socket)
})
//ouvindo
app.listen(3001, function(){
    console.log('listening on 3001...');
})
