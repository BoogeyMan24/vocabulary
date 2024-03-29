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


let act3 = ["turbulent","affront", "espial", "calamity", "insolence", "spurn", "bodkin", "awry", "inoculate", "knave", "calumny", "temperance", "termagant", "lament", "clemency", "withers", "provincial", "gambol", "prate", "perchance"];

let definitions3 = [
	"disorderly, riotous, violent; stormy",
	"an open or intentional insult; a slight",
	"the act of spying",
	"an event that causes great misfortune; a disaster",
	"showing a rude and arrogant lack of respect",
	"to reject scornfully",
	"a small sharp-pointed tool for punching holes in leather or fabric",
	"twisted or turned; wrong, amiss, off course",
	"a way of protection against sickness where they expose the person to a little bit of the disease to make them immune",
	"an unprincipled, untrustworthy, or dishonest person",
	"a false and malicious accusation deliberately meant to hurt someone's reputation",
	"moderation, self-control, esp. regarding alcohol or other desires or pleasures",
	"a scolding nagging bad-tempered woman",
	"to express sorrow or regret; to mourn",
	"mercy, humaneness; mildness, moderateness",
	"the highest part of the back at the base of the neck of various animals especially draft animals",
	"a narrow minded person",
	"to run or jump about playfully",
	"to talk a great deal in a foolish or aimless fashion",
	"perhaps; maybe; possibly",
];


let act4 = ["abatements","cherub", "conjectures", "countenance", "convocation", "discord", "divulging", "exhort", "exploit", "imminent", "hence", "incensed", "inter", "oblivion", "obscure", "peruse", "remiss", "replication", "spendthrift", "superfluous"];

let definitions4 = [
	"a reduction in the amount or degree of something",
	"an angel that is represented in art as a beautiful, fat, naked child with small wings",
	"a guess about something based on how it seems and not on proof",
	"the appearance or expression of someone's face",
	"a large formal meeting, especially of Church officials or of members of some universities in the UK",
	"tension or strife",
	"to make something secret known",
	"strongly encourage or try to persuade someone to do something",
	"a brave, interesting, or unusual act",
	"coming or likely to happen very soon",
	"for this reason; therefore",
	"extremely angry",
	"to bury a dead body",
	"the state of being completely forgotten",
	"not known to many people",
	"to read through something, especially in order to find the part you are interested in",
	"careless and not doing a duty well enough",
	"a reply to an answer",
	"someone who spends a lot of money in a way that wastes it",
	"more than is needed or wanted",
];

let vocabulary = [act1, act2, act3, act4];
let definitions = [definitions1, definitions2, definitions3, definitions4];
let act;
let current = 0;
let limit = [1, 20];
let enter = false;
let count = 0;
let slider = null;

window.onload = function() {
	slider = document.getElementById("slider");
	if(slider != null) {
		document.getElementById("limit").innerHTML = slider.value;

		slider.oninput = function sliderValue() {
			document.getElementById("limit").innerHTML = slider.value;
			limit[1] = slider.value;
			reset();
		};
	}

	if(localStorage.getItem("mode") == null) {
		localStorage.setItem("mode", "light");
	} else if(localStorage.getItem("mode") == "light") {
		lightMode();
	} else if (localStorage.getItem("mode") == "dark") {
		darkMode();
	}

	act = (document.getElementById("active") != null ? parseInt(document.getElementById("active").innerHTML.slice(-1))-1 : null);

	if(act != null) {
		if(document.getElementById("slider") != null) {
			document.getElementById("slider").setAttribute("max", vocabulary[act].length);
			document.getElementById("slider").setAttribute("value", vocabulary[act].length);
		}
		limit = [1, vocabulary[act].length];
		setChecks();
		reset();
	}
};


document.addEventListener('keydown', function(event) {
	if(event.key == "Enter") {
        event.preventDefault();
		document.getElementById("enter").click();
    }
});

function buttonClick() {
	if(document.getElementById("input").value.replace(/\s/g,'') == "" && enter == false) {
		return;
	}
	if (document.getElementById("input").value.toLowerCase() == vocabulary[act][current] && enter == false) {
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


let notSeen = [];
function reset() {
	if (notSeen.length <= 0) {
		notSeen = notSeen.concat(vocabulary[act].splice(limit[1], vocabulary[act].length));
	}

	toggleReveal(false);
	if (localStorage.getItem("repetition", "true")) {
		current = getRandomInt(limit[0]-1, limit[1]);
	} else if (localStorage.getItem("repetition", "false")) {
		let randomElement = notSeen[Math.floor(Math.random() * notSeen.length)];
		current = notSeen.indexOf(randomElement);
		notSeen.splice(current, 1);
	}

	document.getElementById("definition").innerHTML = "<center>" + definitions[act][current] + "<center>";
	document.getElementById("input").value = "";
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

function setChecks() {
	if (localStorage.getItem("repetition") == null) {
		localStorage.setItem("repetition", "false");
	} else if (localStorage.getItem("repetition") == "true"){
		document.getElementById("norepetition").checked = true;
	} else if (localStorage.getItem("repetition") == "false"){
		document.getElementById("norepetition").checked = false;
	}

	noRepetition();

	if (localStorage.getItem("hidereveal") == null) {
		localStorage.setItem("hidereveal", "false");
	} else if (localStorage.getItem("hidereveal") == "true"){
		document.getElementById("hidereveal").checked = true;
	} else if (localStorage.getItem("hidereveal") == "false"){
		document.getElementById("hidereveal").checked = false;
	}

	hideReveal()
}

function toggleMode() {
	count++;
	if (count >= 100) {
		amongUs();
		return;
	}
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

let reveal = true;
function toggleReveal(toggle) {
	if (reveal == true) {
		document.getElementById("reveal").innerHTML = "Reveal";
		document.getElementById("definition").innerHTML = "<center>" + definitions[act][current] + "<center>";
		if(toggle == null || toggle == true) {
			reveal = false;
		}
	} else {
		document.getElementById("reveal").innerHTML = "Definition";
		document.getElementById("definition").innerHTML = "<center>" + vocabulary[act][current] + "<center>";
		if(toggle == null || toggle == true) {
			reveal = true;
		}
	}
}

function hideReveal() {
	if (document.getElementById("hidereveal").checked == false) {
		document.getElementById("reveal").style.display = "block";
		localStorage.setItem("hidereveal", "false");
	} else {
		document.getElementById("reveal").style.display = "none";
		localStorage.setItem("hidereveal", "true");
	}
}

function noRepetition() {
	if (document.getElementById("norepetition").checked == false) {
		localStorage.setItem("repetition", "false")
	} else {
		localStorage.setItem("repetition", "true")
	}

	notSeen = [];
	reset();
}



function amongUs() {
	let r = document.querySelector(':root');
	r.style.setProperty('--background', 'url(./images/amongus.png)');
}

function getStorage(string) {
	if (string != null) {
		console.log(localStorage.getItem(string));
	} else {
		console.log(localStorage.getItem("mode"));
	}
}