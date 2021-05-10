const trns = {
	'making webapp': {
		fr: 'créateur de webapp',
	},
	'and stuff': {
		fr: 'entre autre',
	},
	'source code': {
		fr: 'code source',
	},
	'A webapp where you can add multiple metronomes with different rythms to see what it sounds like': {
		fr: 'Une page web où on peut ajouter plusieurs métronomes avec differents rythmes et voir ce que ça donne',
	},
	'Bombparty is a french vocabulary minigame from jklm.fun. This page finds the smallest word from a given syllable.': {
		fr:
			'Bombparty est un mini-jeu de vocabulaire français par jklm.fun. Cette page trouve les plus petit mots pour une syllabe donnée.',
	},
	'This page guesses the next ethereum mining payout from 2miners, ethermine or hiveon. API updates might break reward in the future.': {
		fr: "Cette page détermine le prochain paiement d'ethereum depuis 2miners, ethermine ou hiveon.",
	},
	'Attestation is a fork from the govt lockdown travel certificate. This fork locally saves your infos and substract 25min to the creation date': {
		fr:
			"Attestation est une fork de celle du gouv. Elle enregistre les infos localement et soustraie 25 min a l'heure de sortie",
	},
	'Bonjourr is a minimal chrome and firefox homepage addon. In collaboration with ': {
		fr: "Bonjourr est une page d'accueil minimaliste pour naviguateur, pour firefox et chrome. En collaboration avec ",
	},
	'Encrypts and decrypts text in base64, can encode with a PIN': {
		fr: 'Chiffre et déchiffre un texte en base64, encode aussi avec un PIN',
	},
	'Type your username and access your note across any device. Paste died in 2020': {
		fr: "Choisis ton nom d'utilisateur et accèdes à tes notes sur tout tes appareils",
	},
}

window.onload = () => {
	const titres = document.querySelectorAll('.project h2') as NodeListOf<HTMLTitleElement>
	const projects = document.querySelectorAll('.project') as NodeListOf<HTMLDivElement>
	const trnsDOM = document.querySelectorAll('.t') as NodeListOf<HTMLParagraphElement>

	let lastOpen = -1

	if (navigator.language.startsWith('fr')) {
		trnsDOM.forEach((dom) => {
			const def = dom.innerText.trim().replace(/[\t\n]+/g, ' ')
			console.log(def)
		})
	}

	titres.forEach((titre, i) => {
		titre.addEventListener('click', () => {
			if (lastOpen !== -1 && lastOpen !== i) {
				projects[lastOpen].classList.remove('opened')
			}

			projects[i].classList.toggle('opened')
			lastOpen = i
		})
	})
}
