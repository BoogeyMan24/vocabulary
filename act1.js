let vocabulary = ["apparition", "assail", "smite", "martial", "obligation", "sterling", "censure", "apt", "tainted", "arrant", "knave", "antic", "perturbed", "emulate", "mettle", "mote", "harbinger", "erring", "auspicious", "suspiration"];

let definitions = [
	"a ghostly appearing figure",
 	"attack in speech or writing",
  	"inflict a heavy blow on, with the hand, a tool, or a weapon",
    "suggesting war or military life",
    "the state of being bound to do or pay something",
	"highest in quality",
	"harsh criticism or disapproval",
	"being of striking appropriateness and relevance",
	"touched by rot or decay",
	"complete and without qualification",
	"a deceitful and unreliable scoundrel",
	"ludicrously odd",
	"thrown into a state of agitated confusion",
	"strive to equal or match, especially by imitating",
	"the courage to carry on",
	"a tiny piece of anything",
	"something indicating the approach of something or someone",
	"capable of making an error",
	"indicating favorable circumstances and good luck",
	"an utterance made by exhaling audibly",
]

let current
let limit = [1, 20];
let enter = false;

window.onload = function() {
	current = getRandomInt(limit[0]-1, limit[1]-1);
	document.getElementById("definition").innerHTML = definitions[current];
};


document.addEventListener('keydown', function(event) {
	if(event.key == "Enter") {
        event.preventDefault();
		document.getElementById("button").click();
    }
});

function buttonClick() {
	if(document.getElementById("input").value.replace(/\s/g,'') == "" && enter == false) {
		return;
	}
	console.log(document.getElementById("input").value.toLowerCase() == vocabulary[current]);
	console.log(enter == false);
	if (document.getElementById("input").value.toLowerCase() == vocabulary[current] && enter == false) {
		console.log("correct")
		document.getElementById("definition").innerHTML = `<center>Correct!</center><center>It is: ${vocabulary[current].charAt(0).toUpperCase() + vocabulary[current].slice(1)}</center>`
		enter = true;
	} else if (document.getElementById("input").value.toLowerCase() != vocabulary[current] && enter == false) {
		document.getElementById("definition").innerHTML = `<center>Incorrect!</center><center>It is: ${vocabulary[current].charAt(0).toUpperCase() + vocabulary[current].slice(1)}</center><center>Not: ${document.getElementById("input").value.toLowerCase()}</center>`
		enter = true;
	} else if (enter == true) {
		reset();
		enter = false;
	}
}

function reset() {
	console.log("reset")
	current = getRandomInt(limit[0]-1, limit[1]-1);
	document.getElementById("definition").innerHTML = definitions[current];
	document.getElementById("input").value = "";
}


function changeCurrent(number) {
	current = number;
	document.getElementById("definition").innerHTML = definitions[current];
}

function changeLimitMin(min) {
	limit[0] = min;
}

function changeLimitMax(max) {
	limit[1] = max;
}

function changeLimit(min, max) {
	limit = [min, max];
}



function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}