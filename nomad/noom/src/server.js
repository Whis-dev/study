import http from 'http';
import WebSocket from 'ws';
import express from 'express';

const app = express();

app.set("view engine", "pug")
app.set("views", __dirname + '/views')

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (_, res) => res.render("home"))

// catchall url
app.get('/*', (_, res) => res.redirect('/'))

const handleListen = () => console.log(`Listening on http://localhost:3000`)

// app.listen(3000, handleListen);

// websocket, http를 같은 서버에서 실행시키는 방법
// 내 http 서버에 접근하는 방법
//    같은 포트에서 http:// 와 ws:// 를 실행시킬 수 있다.
const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

const sockets = [];

wss.on("connection", (socket) => {

  sockets.push(socket);

  console.log("Connected to Browser ✅")

  socket.on("close", () => console.log("Disconneted from the Browser ❌"))

  socket.on("message", (message) => {
    // const temp = JSON.parse(message.toString())
    // console.log(temp)
    const dataString = JSON.stringify(Array.from(new Uint8Array(message.toJSON().data)))


    console.log(JSON.parse(message.toString('utf8')))
    sockets.forEach(aSocket => aSocket.send(message.toString('utf8')))
  })
})

server.listen(3000, handleListen)
