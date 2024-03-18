const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000);

app.get("/", function(req,res){
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var sum = num1+num2;
    res.send("The sum is "+sum); 
});

app.post("/bmicalculator", function(req, res){
    var h = Number(req.body.height);
    var w = Number(req.body.weight);
    var result = w/(h*h);
    res.send("Your BMI is "+result);
});