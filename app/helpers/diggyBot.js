'use strict';
class DiggyBot {

	react(input){
		var response = "42";

		var lowercaseInput = input.toLowerCase()

		var words = this.extractWords(lowercaseInput);
		var origin = this.findOriginQuestion(words);

		if(origin != null) {
			return this.generateOriginResponse(origin);
		}
		else {
			var casual = this.findCasualQuestion(lowercaseInput);
			if(casual != null) {
				return this.generateCasualResponse(casual);
			}
		}

		return response;
	}

	extractWords(string) {
		var words = string.split(" ");
		return words;
	}

	findOriginQuestion(words) {
		var origins = this.setupOrigins();
		for(var i = 0; i < words.length; i++) {
			for(var ii = 0; ii < origins.length; ii++) {
				var re = new RegExp(origins[ii].regex, "g");

				if(words[i].match(re)) {
					return origins[ii];
				}
			}
		}
		return null;
	}

	findCasualQuestion(input) {
		var casual = this.setupCasual();
		for(var ii = 0; ii < casual.length; ii++) {
			var re = new RegExp(casual[ii].regex, "g");

			if(input.match(re)) {
				return casual[ii];
			}
		}
		return null;
	}

	generateOriginResponse(origin) {
		var rR = Math.floor(Math.random() * origin.restaurants.length);
		var restaurant = origin.restaurants[rR];

		var options = ["😄  Why don't you try ", "👌  You might like ", "👍  I can recommend ", " is super awesome 😍"];
		var oR = Math.floor(Math.random() * options.length);

		if(oR > 2) {
			return restaurant + options[oR];
		}
		else {
			return options[oR] + restaurant;
		}
	}

	generateCasualResponse(casual) {
		var rR = Math.floor(Math.random() * casual.responds.length);
		var response = casual.responds[rR];
		return response;
	}

	setupOrigins() {
		var origins = [];

		origins.push(new Origin("mexico", "mexic(an|o)", ["Boojum", "Pablo Picante", "Tolteca"]));
		origins.push(new Origin("india", "india(n)", ["Jaipur", "Jewel In The Crown", "Krishna"]));
		origins.push(new Origin("germany", "germa(n|ny)", ["Don Bratwurst", "The Angelburger"]));
		origins.push(new Origin("italy", "ital(ian|ia|y)", ["Pasta Fresca", "Toscana", "Belluccis"]));

		return origins;
	}

	setupCasual() {
		var casuals = [];

		casuals.push(new Casual("how( is it going| are you)", ["I'm doing fine!😬 How are you?", "Not too bad! You?", "Ough... dude! Fuckin' hangovered😖"]));
		casuals.push(new Casual("what('s up| is up| is going on|'s the craic)", ["Nothin'", "silencio, dude!"]));
		casuals.push(new Casual("hi", ["hey 😄", "what's up dude"]));
		casuals.push(new Casual("fuck you", ["But why?? 😥"]));
		casuals.push(new Casual("who is the most awesome person?", ["Michael, of course 😄"]));

		return casuals;
	}
}

class Origin {
  constructor(country, regex, restaurants) {
    this.country = country;
    this.regex = regex;
    this.restaurants = restaurants;
  }
}

class Casual {
  constructor(regex, responds) {
    this.regex = regex;
    this.responds = responds;
  }
}

 module.exports = new DiggyBot();
