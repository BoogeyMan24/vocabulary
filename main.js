let act1 = ["apparition", "assail", "smite", "martial", "obligation", "sterling", "censure", "apt", "tainted", "arrant", "knave", "antic", "perturbed", "emulate", "mettle", "mote", "harbinger", "erring", "auspicious", "suspiration"];

let definitions1 = [
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


let act2 = ["assay","purport", "entreat", "rebuke", "expostulate", "brevity", "carrion", "contrive", "tedious", "promontory", "rapier", "indict", "visage", "offal", "rogue", "appurtenance", "arras", "clouts", "discretion", "fain"];

let definitions2 = [
	"a test of a substance to determine its components",
 	"have the often-misleading appearance of being or intending",
  	"ask for or request earnestly",
  	"an act or expression of criticism and censure",
	"reason with for the purpose of dissuasion",
	"the attribute of being short or fleeting",
	"the dead and rotting body of an animal; unfit for human food",
	"make or work out a plan for; devise",
	"so lacking in interest as to cause mental weariness",
	"a natural elevation",
	"a straight sword with a narrow blade and two edges",
	"accuse formally of a crime",
	"the appearance conveyed by a person's face",
	"viscera and trimmings of a butchered animal",
	"a deceitful and unreliable scoundrel",
	"accessory",
	"wall hangings; usually to hide an alcove",
	"cloth or clothing",
	"careful choice",
	"gladly; willingly",
];


let vocabulary = [act1, act2];
let definitions = [definitions1, definitions2];
let act;
let current;
let limit = [1, 20];
let enter = false;

window.onload = function() {
	if(localStorage.getItem("mode") == null) {
		localStorage.setItem("mode", "light");
	} else if(localStorage.getItem("mode") == "light") {
		lightMode();
	} else if (localStorage.getItem("mode") == "dark") {
		darkMode();
	}
	act = (document.getElementById("active") != null ? parseInt(document.getElementById("active").innerHTML.slice(-1))-1 : null);
	// current = getRandomInt(limit[0]-1, limit[1]);
	// if(act != null) {
	// 	document.getElementById("definition").innerHTML = definitions[act][current];
	// }
	reset();
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
	if (document.getElementById("input").value.toLowerCase() == vocabulary[act][current] && enter == false) {
		console.log("correct")
		document.getElementById("definition").innerHTML = `<center>Correct!</center><center>It is: ${vocabulary[act][current].charAt(0).toUpperCase() + vocabulary[act][current].slice(1)}</center>`
		enter = true;
	} else if (document.getElementById("input").value.toLowerCase() != vocabulary[act][current] && enter == false) {
		document.getElementById("definition").innerHTML = `<center>Incorrect!</center><center>It is: ${vocabulary[act][current].charAt(0).toUpperCase() + vocabulary[act][current].slice(1)}</center><center>Not: ${document.getElementById("input").value.toLowerCase()}</center>`
		enter = true;
	} else if (enter == true) {
		reset();
		enter = false;
	}
}

function reset() {
	if(act != null) {
		current = getRandomInt(limit[0]-1, limit[1]);
		document.getElementById("definition").innerHTML = definitions[act][current];
		document.getElementById("input").value = "";
	}
	
}


function changeCurrent(variable) {
	current =  vocabulary[act].indexOf(variable) || variable;
	document.getElementById("definition").innerHTML = definitions[act][current];
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



function toggleMode() {
	if (localStorage.getItem("mode") == "light"){
		darkMode();
	} else if (localStorage.getItem("mode") == "dark") {
		lightMode();
	}
}


function darkMode() {
	document.getElementById("link").setAttribute("href", "dark.css");
	localStorage.setItem("mode", "dark");
}

function lightMode() {
	document.getElementById("link").setAttribute("href", "light.css");
	localStorage.setItem("mode", "light");
}


function getStorage(string) {
	if (!string) {
		localStorage.getItem(string);
	} else {
		localStorage.getItem("mode")
	}
}