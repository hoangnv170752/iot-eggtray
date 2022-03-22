var fs = require('fs'); //file system
var url = require('url'); 
var http = require('http');
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

const ejs = require('ejs');
const app = express();

app.use(bodyParser.json())

app.engine("html", require("ejs").renderFile);
app.use(express.static("static"));

app.get("/signup", function (req,res) {
    res.render("signup.html");
});

app.get("/", function (req,res) {
    res.render("login.html");
})

app.get("/profile", function (req,res) {
    res.render("profile.html");
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

// var WebSocket = require('ws'); //websocket
// const { allowedNodeEnvironmentFlags } = require('process');
// // function gửi yêu cầu(response) từ phía server hoặc nhận yêu cầu (request) của client gửi lên
// function requestHandler(request, response) {
//     fs.readFile('./index.html', function(error, content) {
//         response.writeHead(200, {
//             'Content-Type': 'text/html'
//         });
//         response.end(content);
//     });
// }
// // create http server
// var server = http.createServer(requestHandler);
// var ws = new WebSocket.Server({
//     server
// });
// var clients = [];

// function broadcast(socket, data) {
//     console.log(clients.length);
//     for (var i = 0; i < clients.length; i++) {
//         if (clients[i] != socket) {
//             clients[i].send(data);
//         }
//     }
// }
// ws.on('connection', function(socket, req) {
//     clients.push(socket);
//     socket.on('message', function(message) {
//         console.log('received: %s', message);
//         broadcast(socket, message);
//     });
//     socket.on('close', function() {
//         var index = clients.indexOf(socket);
//         clients.splice(index, 1);
//         console.log('disconnected');
//     });
// });
// server.listen(3000);
// console.log('Server listening on port 3000');

/* Websocket status: 4 cái
0 Connecting 
1 Open 
2 Closing 
3 Closed
=> các hàm ws.send / ws.on /onopen onmessage onchange 
*/
/* Delay 30s, trong vong 30s chay web len , xem co cap nhat gia tri duoc moi nhat hay khong*/
