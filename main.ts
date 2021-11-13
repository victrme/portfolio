const trns = {
	'making webapp': {
		fr: 'créateur de webapp',
	},
	'and stuff': {
		fr: 'entre autre',
	},
	'A webapp where you can add multiple metronomes with different rythms to see what it sounds like': {
		fr: 'Une page web où on peut ajouter plusieurs métronomes avec differents rythmes et voir ce que ça donne',
	},
	'Bombparty is a french vocabulary minigame from jklm.fun. This page finds the smallest word from a given syllable': {
		fr: 'Bombparty est un mini-jeu de vocabulaire français par jklm.fun. Cette page trouve les plus petit mots pour une syllabe donnée',
	},
	'This page guesses the next ethereum mining payout from 2miners, ethermine or hiveon. API updates might break reward in the future':
		{
			fr: "Cette page détermine le prochain paiement d'ethereum depuis 2miners, ethermine ou hiveon",
		},
	'Attestation is a fork from the govt lockdown travel certificate. This fork locally saves your infos and substract 25min to the creation date':
		{
			fr: "Attestation est une fork de celle du gouv. Elle enregistre les infos localement et soustraie 25 min à l'heure de sortie",
		},
	'Bonjourr is a minimal chrome and firefox homepage addon. In collaboration with': {
		fr: "Bonjourr est une page d'accueil minimaliste pour naviguateur, pour firefox et chrome. En collaboration avec ",
	},
	'Encrypts and decrypts text in base64, can encode with a PIN': {
		fr: 'Chiffre et déchiffre un texte en base64, encode aussi avec un PIN',
	},
	'Type your username and access your note across any device. Paste no longer works because firebase is expensve': {
		fr: "Choisis ton nom d'utilisateur et accèdes à tes notes sur tout tes appareils. Paste ne fonctionne plus parceque Firebase est cher",
	},
}

window.onload = () => {
	const projects = document.querySelectorAll('.project') as NodeListOf<HTMLDivElement>
	const mail = document.getElementById('mail')
	let lastOpen = -1

	const traduction = {
		subtext: () => {
			if (navigator.language.startsWith('fr')) {
				// use innerText as trns object key
				const subtexts = document.querySelectorAll('.sub-text .t') as NodeListOf<HTMLParagraphElement>
				subtexts.forEach((st) => (st.innerText = trns[st.innerText].fr))

				// Head
				document.documentElement.lang = 'fr'
			}
		},

		projects: (i: number) => {
			if (navigator.language.startsWith('fr')) {
				// Removes tabs spaces
				const dom = projects[i].querySelector('.description .t') as HTMLParagraphElement
				const str = dom.innerText.trim().replace(/[\t\n]+/g, ' ')

				// Can only translate once
				if (trns[str] !== undefined) dom.innerText = trns[str].fr
			}
		},
	}

	function mailObfuscation() {
		const addr = ['m', 'a', 'i', 'l']
		const name = mail.textContent
		let strarr = name.split('')

		function discovers() {
			setTimeout(() => {
				//
				// Gets star indexes
				const indexes: number[] = []
				for (let i = 0; i < strarr.length; i++) strarr[i] === '*' ? indexes.push(i) : ''

				if (indexes.length > 0) {
					// Randomly chooses one
					const pointer = indexes[Math.floor(Math.random() * indexes.length)]

					// Star char becomes address char
					strarr[pointer] = addr[pointer]
					mail.textContent = strarr.join('')

					// Recursion while stars are present
					discovers()
				}
			}, Math.floor(Math.random() * 200))
		}

		discovers()
	}

	// Mail
	mailObfuscation()

	// Check translation
	traduction.subtext()

	// work list control
	projects.forEach((project, i) => {
		//
		// Click
		project.querySelector('.title').addEventListener('click', () => {
			//
			// Close all
			if (lastOpen !== -1 && lastOpen !== i) {
				projects[lastOpen].classList.remove('opened')
			}

			// Toggle
			projects[i].classList.toggle('opened')
			lastOpen = i

			traduction.projects(i)
		})
	})
}
