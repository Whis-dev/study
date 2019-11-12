var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('chat'); // 루트 페이지로 접속시 chat.pug 렌더링
});

var count = 1;
io.on('connection', function(socket){ // 채팅방에 접속했을 때 - 1
    console.log('user connected', socket.id);
    var name = `익명${count++}`
    socket.name = name;
    io.to(socket.id).emit('create name', name); // 서버가 해당 socket id에만 이벤트를 전달. 채팅방에 접속한 유저들마다 닉네임이 다른데, 모두 바뀌지 않고 각 유저들에게만 닉네임이 보여지기위해 씀
    io.emit('new_connect', name);

    socket.on('disconnect', function() { // 채팅방 접속이 끊어졌을 때 - 2
        console.log(`user disconnected: ${socket.id} ${socket.name}`);
        io.emit('new_disconnect', socket.name);
    });

    socket.on('send message', function(name, text) {
        var msg = `${name} : ${text}`;
        (name != socket.name) && io.emit('change name', socket.name, name);
        socket.name = name;
        console.log(msg);
        io.emit('receive message', msg);
    });
});

http.listen(3000, function(){
    console.log('server on....');
});