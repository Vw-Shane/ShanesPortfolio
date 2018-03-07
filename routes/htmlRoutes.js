var path = require("path");

module.exports = function(app) {
		app.get("/", function(req,res){
			res.sendFile(path.join(__dirname,"../index.html"));
		});
		app.get("/webdev", function(req,res){
			res.sendFile(path.join(__dirname,"../index.html"));
		});
		app.get("/photo", function (req,res) {
			res.sendFile(path.join(__dirname,"../pages/photo.html"));
		});
		app.get("/cat", function(req,res){
			res.sendFile(path.join(__dirname,"../pages/categories.html"));
		});
		app.get("/landing", function(req,res){
			res.sendFile(path.join(__dirname,"../pages/landingPage.html"));
		});
		
	};