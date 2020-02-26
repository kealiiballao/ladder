
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});
app.post("/", function(req, res){
  var heightWall = parseFloat(req.body.height);
  var depthWall = parseFloat(req.body.depth);
  var lengthWall = (Math.sqrt(Math.pow(depthWall, 2) + Math.pow(heightWall, 2))).toFixed(2);
  var typeOfHeightWall = typeof(heightWall);
  var typeOfDepthWall = typeof(depthWall);
  var typeOfLengthWall = typeof(lengthWall);
  res.send("<strong>lenghtWall: </strong>"+lengthWall+"("+typeOfLengthWall+")"+ ". <strong>heightWall variable type: </strong>"+typeOfHeightWall+". depthWall variable type: "+typeOfDepthWall);


})
app.listen(3000, function() {
console.log ("Server is running on port 3000")
});
