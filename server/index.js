const express = require('express')
const compression = require('compression')
const fs = require("fs");
const cors = require('cors')
const app = express()
const port = 8080;

app.get("/api/events.json", cors(),(req,res) => {
    const events = JSON.parse(
        fs.readFileSync(__dirname + "/mocks/events.json", "utf-8")
    );
    console.log("Responding to /api/events.json");
    res.contentType("application/json");
    res.send(events);
});

app.use(compression());
app.use(express.static('./../build'));
app.use(`/*`, express.static('./../build', {redirect: true}));


app.listen(port, () => {
    console.log(`files serving server accessible at http://localhost:${port}`)
})