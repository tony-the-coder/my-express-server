const express = require('express')
const app = express()

app.get("/", function (req, res) {
    res.send("<h1>Hello, world</h1>")
});

app.get("/contact", function (req, res) {
    res.send("Contact me at a@a.com");
});

app.get("/about", function (req, res) {
    res.send("Stuff about me")
})

app.get("/hobbies", function (req, res) {
    res.send("<ul><li>Work</li><li>Reading</li><li>Learning</li></ul>")
});
app.get("/hobbies", function (req, res) {
    res.send("<ul><li>Work</li><li>Reading</li><li>Learning</li></ul>")
});
app.listen(3000, function () {
    console.log("Server Started on Port 3000")
});

