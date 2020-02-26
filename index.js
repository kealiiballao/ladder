
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});
app.post("/", function(req, res){
  var radCircle = parseFloat(req.body.n1);;
  var areaCircle = Math.PI * Math.pow(radCircle, 2);
  var circumCircle = 2 * Math.PI * radCircle;
  res.send("The Area of the Cirle is " + areaCircle.toFixed(2) + " and the Circumference is " + circumCircle.toFixed(2));
})
app.listen(3000, function() {
console.log ("Server is running on port 3000")
});
