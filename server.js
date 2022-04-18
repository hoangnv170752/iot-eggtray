var allTray = {};
var allUser = {};
const db = require("./db");
db.trays.once('value', (snap) => {
    allTray = snap.val();
})
db.users.once('value', (snap) => {
    allUser = snap.val();
})


function eggtray(stt, oldStt, oldTime) {
    this.stt = stt;
    this.time = oldTime; //biên thời gian lưu được trong server 
    const t = new Date();
    const strT = ("" + t.getFullYear()).slice(2) + ":" +
        ("0" + (t.getMonth() + 1)).slice(-2) + ":" +
        ("0" + t.getDate()).slice(-2) + ":" +
        ("0" + t.getHours()).slice(-2) + ":" +
        ("0" + t.getMinutes()).slice(-2) + ":" +
        ("0" + t.getSeconds()).slice(-2);
    this.stt.map((val, id) => {
        if (val && !oldStt[id]) this.time[id] = strT;
    })
}

// const obj = new eggtray([], [], []);


const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// const cors = require("cors")
const app = express();
const PORT = 5000;

app.use(bodyParser.json())
app.engine("html", ejs.renderFile);
app.use(express.static("static"));
// app.use(cors())

app.get("/signup", function(req, res) {
    res.render("signup.html");
});

app.get("/", function(req, res) {
    res.render("login.html");
})

app.get("/profile", function(req, res) {
    res.render("profile.html");
})
app.get("/eggtrays", function(req, res) {
    res.render("eggtrays.html");
});
const serverIp = Object.values(require("os").networkInterfaces())
    .flat()
    .filter((item) => !item.internal && item.family === "IPv4")[0]
    .address;

app.listen(PORT, () => {
    console.log(`Listening on http://${serverIp}:${PORT}`);
});

/* Communicate with ESP8266 */
const { editTray, settingMode } = require('./obj');

const mode = 0,
    t = 1000;
var count = 50;
app.get("/config", async(req, res) => {
    const data = new settingMode(mode, t);
    count = count - 1;
    if (count == 0) {
        count = 50;
        res.status(200).json(data);
    } else res.status(200).json({ mode: 0 });
})

app.post("/update", (req, res) => {
    const id = req.body.id;
    allTray[id] = editTray(allTray[id], req.body.stt);
    console.log(allTray)
    res.sendStatus(200);
})