var express = require("express");
var app = express();
var bodyParser= require("body-parser");
 var campgrounds = [
        {name: "Salmon Creek", image: "https://metaoutdoor.s3.amazonaws.com/37/conversions/cover.jpg"},
        {name: "Granite hill", image: "https://farout.be/wp-content/uploads/2017/04/Outdoormerk-Quechua.jpg"},
        {name: "Stanley park", image: "https://totesnewsworthy.com/wp-content/uploads/2017/05/bigstock-Illuminated-Tent-In-The-Winter-157101383.jpg"},
        {name: "Salmon Creek", image: "https://metaoutdoor.s3.amazonaws.com/37/conversions/cover.jpg"},
        {name: "Granite hill", image: "https://farout.be/wp-content/uploads/2017/04/Outdoormerk-Quechua.jpg"},
        {name: "Stanley park", image: "https://totesnewsworthy.com/wp-content/uploads/2017/05/bigstock-Illuminated-Tent-In-The-Winter-157101383.jpg"},
        {name: "Salmon Creek", image: "https://metaoutdoor.s3.amazonaws.com/37/conversions/cover.jpg"},
        {name: "Granite hill", image: "https://farout.be/wp-content/uploads/2017/04/Outdoormerk-Quechua.jpg"},
        {name: "Stanley park", image: "https://totesnewsworthy.com/wp-content/uploads/2017/05/bigstock-Illuminated-Tent-In-The-Winter-157101383.jpg"}
        ];
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.get("/", function(req, res){
    res.render("landing");
});
app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function( req,res){
   //get data frim form and add the data to array 
   var name = req.body.campgroundName;
   var image = req.body.campgroundImage;
   var temp ={
       name:name, 
       image:image
   };
   campgrounds.push(temp);
   //redirect it to the campgrounds page
   res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res){
   res.render("newForm") ;
});

app.listen(process.env.PORT, process.env.IP, function(req, res){
   console.log("server started "); 
});