var data = require("../data.json");

exports.addFriend = function(req, res) {
	// Your code goes here
	var username = req.query.username;
	var password = req.query.password;
	var newFriend = 
		{
			"username": username,
			"password": password,
			"age": "N/A",
			"weight": "N/A",
			"goal": "N/A",
			"comments": "N/A",
			"imageURL": "http://www.shiamatrimonial.co.uk/go_files/profiles/thumbs/no-user-icon-1.gif",			
			"water": 10
		};
		
	data["accounts"].push(newFriend);
	console.log(data);

	res.render('add', {
		'username': username
	});
 }