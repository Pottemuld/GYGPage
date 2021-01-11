const express = require('express');
const cors = require('cors');
const fs = require('fs');
var path = require('path');
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
app.use(cors());
app.options('*', cors());

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile("./assets/html/index.html", { root: __dirname });

});

app.get('/gifs', (req, res) => {
    res.sendFile(path.resolve('../untitled/server/assets/html/index.html'));

});

app.get('/sendjson', (req, res) => {
    //console.log("server requested for json");

    let file = JSON.parse(fs.readFileSync(path.resolve(__dirname, './videos.json')));

    //console.log(JSON.stringify(file));

    res.json(JSON.stringify(file));
    res.end();
});

var urlencodedParser = bodyParser.urlencoded({ extended: true })

const upload = multer({ dest: "./" });


app.post("/addclip", upload.single('video'), (req, res) => {
    console.log("test")
    return res.json({ status: 'OK' });
});


app.listen(2001, function() {
    console.log('Server is listening on port 2001');
});