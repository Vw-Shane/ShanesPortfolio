var express = require("express");
var bodyParser = require("body-parser");
var app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable CORS so that browsers don't block requests.
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
//subject to change
require("./routes/htmlRoutes")(app);
// require("./routes/apiRoutes")(app);


app.listen(PORT, function() {
    console.log("server listening on Port " + PORT);
});