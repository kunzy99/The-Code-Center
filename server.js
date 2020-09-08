
	const express = require('express'),
			bodyParser = require('body-parser'),
			mongoose = require('mongoose'),
			app = express();

			//Military is the database name below...localhost connect

	mongoose.connect('mongodb://localhost:27017/military', {useNewUrlParser:true, useUnifiedTopology:true})

	app.use(bodyParser.urlencoded({extended:true}));

	//Declaring defence.html schema below

	const defenceSchema = new mongoose.Schema({
		service:String,
		telephone:Number,
		pass:String

	})

	const Defence = new mongoose.model('Defence', defenceSchema)

	//Declaring airforce.html schema below

	const airforceSchema = new mongoose.Schema({
		firstname:String,
		middlename:String,
		surname:String,
		gender:String,
		dob:String,
		telephone:Number,
		height:String,
		weight:String,
		hair:String,
		eye:String,
		guarantor:String,
		address:String
	})

	const Airforce = new mongoose.model('Airforce', airforceSchema)

	const armySchema = new mongoose.Schema({
		firstname:String,
		middlename:String,
		surname:String,
		gender:String,
		dob:String,
		telephone:Number,
		height:String,
		weight:String,
		hair:String,
		eye:String,
		guarantor:String,
		address:String
	})

	const Army = new mongoose.model('Army', armySchema)


	//declaring navy.html schema below

	const navyschema = new mongoose.Schema({
		firstname:String,
		middlename:String,
		surname:String,
		gender:String,
		dob:String,
		telephone:Number,
		height:String,
		weight:String,
		hair:String,
		eye:String,
		guarantor:String,
		address:String

	})

	const Navy = new mongoose.model('Navy', navyschema)

	//GET AND POST....FRONTEND/BACKEND below



	app.get('/', function(req, res){
		res.sendFile(__dirname + '/defence.html');
	})

	app.post('/', function(req, res){
		//console.log(req.body);

		let{service, telephone, password} = req.body;

			const newDefence = new Defence({

				service,
				telephone, 
				password

			})

			newDefence.save(function(err){
				if(err){
					console.log(err)

				} else {
					res.send("Welcome back "+ service);
				}
			})
				
	})

	app.get('/airforce', function(req, res){
		res.sendFile(__dirname + '/airforce.html');
	})

	app.post('/airforce', function(req, res){
		//console.log(req.body);

		let{firstname, middlename, surname, gender, dob, telephone, height, weight,
				hair, eye, guarantor, address} = req.body;

			const newAirforce = new Airforce({

				firstname,
				middlename,
				surname,
				gender,
				dob,
				telephone, 
				height,
				weight,
				hair,
				eye,
				guarantor,
				address

				})

			newAirforce.save(function(err){
				if(err){
					console.log(err)

				}	else {
					res.send("Application received, "+ surname);
				}
			})

				
	})

			

	app.get('/army', function(req, res){
		res.sendFile(__dirname + '/army.html');
	})

	app.post('/army', function(req, res){
		//console.log(req.body);

		let{firstname, middlename, surname, gender, dob, telephone, height, weight,
				hair, eye, guarantor, address} = req.body;

			const newArmy = new Army({

				firstname,
				middlename,
				surname,
				gender,
				dob,
				telephone, 
				height,
				weight,
				hair,
				eye,
				guarantor,
				address

				})

			newArmy.save(function(err){
				if(err){
					console.log(err)
				}	else{
					res.send("Application received, "+ surname);
				}
			})

				
	})

	app.get('/navy', function(req, res){
		res.sendFile(__dirname + '/navy.html');
	})

	app.post('/navy', function(req, res){
		//console.log(req.body);

		let{firstname, middlename, surname, gender, dob, telephone, height, weight,
				hair, eye, guarantor, address} = req.body;

				const newNavy = new Navy({

				firstname,
				middlename,
				surname,
				gender,
				dob,
				telephone, 
				height,
				weight,
				hair,
				eye,
				guarantor,
				address


				})


			newNavy.save(function(err){
				if(err){
					console.log(err)
				
				} else {
					res.send("Application received, "+ surname);
				}


			})
				


				
	})



	app.listen(8000, function(){
		console.log("Server is listening on Port 8000");
	})