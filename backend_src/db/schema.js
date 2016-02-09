//connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


	
function insertCred(userId, passw) {
	var Schema =  new mongoose.Schema({ username:String, Password: String});	
	//insert document
	var user = mongoose.model('user', Schema);
	var u = new user({ 	username:userId, 	password:passw });  
	u.save(function(err){
		if(err){
			console.log("We fucked up");
		}	
		console.log("saved");
	});
}
insertCred("alex1", "mypass");