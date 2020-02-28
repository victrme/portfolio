
function theme() {

	function auto() {

		let d = new Date()
		let c = (d.getHours() < 8 || d.getHours() > 20)

		document.body.id = (c ? "nit" : "")
	}

	function apply() {

		let theme = themeDOM.value;
		localStorage.theme = theme;

		if (theme === "aut") auto()
		else
			document.body.id = "";
			document.body.id = theme;
	}

	let theme;
	const themeDOM = document.getElementById("theme")

	//init
	if (localStorage.theme)
		theme = localStorage.theme;
	else {
		localStorage.theme = "aut";
		theme = "aut";
	}

	themeDOM.value = localStorage.theme;
	apply();

	themeDOM.onchange = function() {apply()}
}

function mail() {

	const mailDOM = document.getElementById('mail')
	const obfuscate = str => {
		let txt = document.createElement('textarea');
		txt.innerHTML = str;
		return txt.value;
	}

	mailDOM.innerText = obfuscate(atob("JiMxMTgmIzEwNSYjOTkmIzExNiYjMTExJiMxMTQmIzQ2JiM5NyYjMTIyJiMxMDEmIzExOCYjMTAxJiMxMDAmIzExMSYjNjQmIzEwOSYjOTcmIzEwNSYjMTA4JiM0NiYjOTkmIzExMSYjMTA5JiMxMyYjMTAmIzEzJiMxMA=="))

	setTimeout(function() {
		mailDOM.setAttribute("href", obfuscate(atob("JiMxMDkmIzk3JiMxMDUmIzEwOCYjMTE2JiMxMTEmIzU4JiM0NyYjNDcmIzExOCYjMTA1JiM5OSYjMTE2JiMxMTEmIzExNCYjNDYmIzk3JiMxMjImIzEwMSYjMTE4JiMxMDEmIzEwMCYjMTExJiM2NCYjMTA5JiM5NyYjMTA1JiMxMDgmIzQ2JiM5OSYjMTExJiMxMDk=")))
	}, 100)
}

function traduction() {

	const lang = window.navigator.languages
	const doms = document.getElementsByClassName('trn')

	//quit function if french is detected
	for (let l of lang) if (l === "fr") return false

	//parse through trn elements to apply translation
	for (let d of doms)
		d.innerText = dict[d.innerText]["en"]
}

window.onload = function() {
	theme()
	mail()
	traduction()
}

const dict = {
	"Bonjour, ici Victor !": {
		en: "Hi, Victor here !"
	},
	"Ce domaine appartient à Victor Azevedo, ce site n'est pas un portfolio.": {
		en: "This domain belongs to Victor Azevedo, this website is not a portfolio."
	},
	"Vous pouvez feuilleter mes projets, les utiliser ": {
		en: "You can see my projects, use them "
	},
	"ou me contacter.": {
		en: "ou contact me."
	},
	"Contact": {
		en: "Contact"
	},
	"Projets": {
		en: "Projects"
	},
	"site web": {
		en: "website"
	},
	"Une page d'accueil customisable au style d'iOS, construite en collaboration avec": {
		en: "A customizable startpage inspired by iOS' design, built in collaboration with"
	},
	"Disponible sur Firefox et Chrome.": {
		en: "Available on Firefox and Chrome."
	},
	"Synchronise n'importe quel texte sur tous vos appareils avec un simple nom d'utilisateur. Chiffré coté client et zero log.": {
		en: "Sync every text you want on all your devices with a simple username. Client-side encryption and zero log."
	},
	"Utilise l'emploi du temps individualisé de l'ENT UCA pour l'afficher plus rapidement, et plus clairement.": {
		en: "Uses UCA individualized schedules to display it in a more intuitive way."
	},
	"Mon premier site 😊 Un site statique de présentation pour la Savonnerie La Curieuse.": {
		en: "My first website 😊 A static presentation website for the Savonnerie La Curieuse."
	},
	"Un design simple de portefeuille bitcoin !": {
		en: "A simple Bitcoin wallet design !"
	},
	"Limite l'utilisation de sites chronophages en sélectionnant un quota par jour. Nécessite beaucoup de permissions et doit être revu.": {
		en: "Limit chronophageous website by selecting a quota per day. Uses a lot of permissions for it to work, needs to be redone."
	},
	"Stylise le \"twitter décentralisé\" memo.cash un peu mieux.": {
		en: "Styles the \"decentralized Twitter\" memo.cash a bit better."
	},
	"Recherche rapidement la valeur actuelle d'une quantité de crypto en tapant dans la barre de recherche.": {
		en: "Rapidly search the current value of a quantity of crypto by typing in the browser search bar."
	},
	"Croquis de moi": {
		en: "A sketch of me"
	},
	"par son créateur éponyme, France.": {
		en: "by its eponym creator, France."
	},
	"Langue": {
		en: "Language"
	},
	"Thème": {
		en: "Theme"
	},
	"Jour": {
		en: "Day"
	},
	"Nuit": {
		en: "Night"
	},
	"Noir": {
		en: "Black"
	}
}