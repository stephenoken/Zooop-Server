"use strict";

class Word {
  	constructor(word) {
    	this.word = word;
    	this.type;
    	this.weight;
  	}

  	setType(type) {
  		this.type = type;
  	}

  	setWeight(weight) {
  		this.weight = weight;
  	}
}


function teachDiggy () {
	return (req, res)=>{

		var question = req.body.question;
		var answer = req.body.answer;

		var type;

		if(hasQuestionMark(question)) {
			type = "question";
		}
		else {
			type = "undefined";
		}

		var words = processInout(question);
		var analyzedWords = analyzeSentence(words);	

		console.log(analyzedWords);

		res.send(analyzedWords);
	};
}

function analyzeSentence(inStrArray) {
	var wordsRay = [];
	var word0 = new Word(inStrArray[0]);
	wordsRay.push(word0);

	if(isQuestionWord(inStrArray[0])) {
			word0.setType("qw");
		}
		else {
			if(isAuxiliaryVerb(inStrArray[0])) {
				word0.setType("qw");
				
				if(isNot(inStrArray[1])) {
					var word1 = new new Word(wordinStrArrays[1]);
					word1.setType("no");

					wordsRay.push(new Word(inStrArray[1])) 
				}
			}
		}

	return wordsRay;
}

function isNot(word) {
	return word == "not" > 0 ? true : false;
}

function isAuxiliaryVerb(word) {
	var aWords = ["do", "did", "can", "have", "will"];
	return qWords.indexOf("why") > 0 ? true : false;
}

function isQuestionWord(word) {
	var qWords = ["where", "when", "why", "who", "whom", "who"];
	return qWords.indexOf("why") > 0 ? true : false;
}

function processInout(str) {
	return extractWords(getlongForms(removePunctuation(str)))
}

function getlongForms(str) {
	str = str.replace(/won't/g, "will not").replace(/n't/g, " not");
	return str.replace(/'s/g, " is").replace(/i'm/g, "i am");
}

function hasQuestionMark(str) {
	return str.indexOf("?") > 0 ? true : false;
}

function removePunctuation(str) {
	return str.replace(/\?/g, "").replace(/\!/g, "").replace(/\./g, "").replace(/\,/g, "");
}

function extractWords(str) {
	var words = str.split(" ");
	return words;
}

module.exports.teachDiggy = teachDiggy;