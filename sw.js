self.addEventListener('install', function(e) {
	console.log('Install!');

	e.waitUntil(caches.open('airhorner').then(function(cache) {
		return cache.addAll([
			'/',
			'/index.html',
			'/sw.js',
			'/ressources/styles/style.min.css',
			'/ressources/scripts/main.min.js',
			'/ressources/fonts/Orkney-Light.ttf',
			'/ressources/fonts/Orkney-Medium.ttf',
			'/ressources/images/icons/compressed/bonjourr.png',
			'/ressources/images/icons/compressed/paste.png',
			'/ressources/images/icons/compressed/edt.png',
			'/ressources/images/icons/compressed/slc.png',
			'/ressources/images/icons/compressed/mes.png',
			'/ressources/images/icons/compressed/sbcc.png',
			'/ressources/images/icons/compressed/productif.png',
			'/ressources/images/icons/compressed/wsb.png',
			'/ressources/images/addresses/croquis.png',
			'/ressources/images/bchqrcode.png',
			'/ressources/images/icons/compressed/bitcoincash.png',
			'/android-chrome-192x192.png?v=LbzLljP6xz',
			'/site.webmanifest?v=LbzLljP6xz',
			'/favicon.ico?v=LbzLljP6xz',
			'/favicon-16x16.png?v=LbzLljP6xz',
			'/favicon-32x32.png?v=LbzLljP6xz'
		]);
	}));
});

self.addEventListener("activate", event => {
	console.log('Activate!');
});

self.addEventListener('fetch', function(event) {

	console.log(event.request.url);
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});

let deferredPrompt;

self.addEventListener('beforeinstallprompt', (e) => {
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

/*self.onclick = function() {
	deferredPrompt.prompt();
}*/