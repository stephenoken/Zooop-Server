//connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Schema =  new mongoose.Schema(
{
	username:String,
	Password: String	
}
);

//insert document
var user = mongoose.model('user', Schema);



var u = new user({
	username:"Anuj",
	password:"pwrd"
});


u.save(function(err){
	if(err){
		console.log("We fucked up");
	}
	
	console.log("saved");
});

//querying document
user.findOne({username: "Stephen"}, function(err, document) {
  console.log(document);
});