function eggtray(stt, oldStt, oldTime) {
    this.stt = stt;
    this.time = oldTime;
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

const obj = new eggtray([], [], []);

const db = require("./db");
db.users.on('value', (snap) => {
    // obj = snap.val();
    console.log(snap.val()['0001']);
})

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

var mode = 2;
var count = 50;
var t = 3000;
app.get("/config", async(req, res) => {
    data = {
        mode: mode,
        time: t
    }
    count = count - 1;
    if (count > 0) {
        mode = 0;
    } else {
        count = 50;
        mode = 2;
        t = 8000 - t;
    }
    res.status(200).send(data);
})

app.post("/update", (req, res) => {
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});