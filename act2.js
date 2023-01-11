let vocabulary = ["assay","purport", "entreat", "rebuke", "expostulate", "brevity", "carrion", "contrive", "tedious", "promontory", "rapier", "indict", "visage", "offal", "rogue", "appurtenance", "arras", "clouts", "discretion", "fain"];

let definitions = [
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
	"have the often misleading appearance of being or intending",
	"viscera and trimmings of a butchered animal",
	"a deceitful and unreliable scoundrel",
	"accessory",
	"wall hangings; usually to hide an alcove",
	"cloth or clothing",
	"careful choice",
	"gladly; willingly",
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