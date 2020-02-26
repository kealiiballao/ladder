
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
  var lengthWall = parseFloat((Math.sqrt(Math.pow(depthWall, 2) + Math.pow(heightWall, 2))).toFixed(2));
  var typeOfHeightWall = typeof(heightWall);
  var typeOfDepthWall = typeof(depthWall);
  var typeOfLengthWall = typeof(lengthWall);
  res.send("<!DOCTYPE html><html><head><title>Results</title></head><body><div><p><strong>Ladder Length: </strong>"+lengthWall+"("+typeOfLengthWall+")</p>"+ "<p><strong>heightWall variable type: </strong>"+typeOfHeightWall+"</p><p><strong>depthWall variable type: </strong>"+typeOfDepthWall+"</p><button>BACK</button></div></body></html>");
})
app.listen(3000, function() {
  console.log ("Server is running on port 3000")
});
