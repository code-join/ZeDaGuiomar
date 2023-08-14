const toogleMode = () => {
	const html = document.documentElement;
	html.classList.toggle('light');

	// pegar a tag img
	// const img = document.querySelector("#profile img");

	// if(html.classList.contains('light')){
	//   img.setAttribute('src', './assets/avatar-light.JPG')
	// } else {
	//   img.setAttribute('src', './assets/avatar.png')
	// }
};

// Mapa de Palco
const mapa_palco = document.querySelector('#mapa-de-palco');
mapa_palco.addEventListener('click', (e) => {
	e.preventDefault();
	window.open('assets/mapa_de_palco.jpg');
});

// Portfolio
const portfolio = document.querySelector('#portfolio');
portfolio.addEventListener('click', (e) => {
	e.preventDefault();
	window.open('assets/portfolio.pdf');
});

// Release
const release = document.querySelector('#release');
release.addEventListener('click', (e) => {
	e.preventDefault();
	window.open('assets/release.pdf');
});
