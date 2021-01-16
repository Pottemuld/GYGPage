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

app.get('/sendjson', (req, res) => {
    //console.log("server requested for json");

    let file = JSON.parse(fs.readFileSync(path.join(__dirname, './videos.json')));

    //console.log(JSON.stringify(file));

    res.json(JSON.stringify(file));
    res.end();
});

var urlencodedParser = bodyParser.urlencoded({ extended: true })

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./videos");
    },
    filename: (req, file, cb) => {
        console.log("title = " + req.body.title);
        cb(null, (req.body.title + ".mp4"));
    }
})

const upload = multer({ storage: storage });


app.post("/addclip", upload.single('video'), urlencodedParser, (req, res) => {
    updateList(req.body.title);
    return res.redirect("/");
});

function updateList(title) {
    let file = JSON.parse(fs.readFileSync("./videos.json"));

    let newVideo = {};

    newVideo.title = title;
    newVideo.localPath = path.join("./videos/" + (title + ".mp4"));

    file.push(newVideo);

    console.log(file);

    fs.writeFileSync("videos.json", JSON.stringify(file));
    return true;
}


app.listen(2001, function() {
    console.log('Server is listening on port 2001');
});