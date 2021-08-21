const container = document.querySelector('.container');
//createCard();

async function createCard(data) {
	const card = document.createElement('div');
	card.classList.add('card');

	const cardInfo = document.createElement('div');
	cardInfo.classList.add('card-info');

	const cardTitle = document.createElement('div');
	cardTitle.classList.add('title');
	const cardTitleH1 = document.createElement('h1');
	cardTitleH1.innerHTML = `${data.name}`;
	cardTitle.append(cardTitleH1);

	const cardStatus = document.createElement('div');
	cardStatus.classList.add('status');
	const cardLiveStatus = document.createElement('div');
	cardLiveStatus.classList.add('live-status');

	if (data.status === "Dead") {
		cardLiveStatus.classList.add('dead');
	}

	const cardStatusP = document.createElement('p');
	const cardStatusPText = document.createTextNode(`species -- ${data.species}`);
	cardStatus.append(cardLiveStatus);
	cardStatusP.append(cardStatusPText);
	cardStatus.append(cardStatusP);
	cardTitle.append(cardStatus);
	cardInfo.append(cardTitle);

	const cardContent = document.createElement('div');
	cardContent.classList.add('content');
	const cardContentText = document.createTextNode(`Location - ${data.location.name}`);
	cardContent.append(cardContentText);
	cardInfo.append(cardContent);

	card.append(cardInfo);

	const cardImage = document.createElement('div');
	cardImage.classList.add('card-image');
	const image = document.createElement('img');
	image.src = `${data.image}`;
	image.alt = 'Some image';
	cardImage.append(image);
	card.append(cardImage);

	container.append(card);
}

async function getCharacter(number) {
	return fetch(`https://rickandmortyapi.com/api/character/${number}`);
}

async function start(...arguments) {
	for (args of arguments) {
	let responce = await getCharacter(args);
	let data = await responce.json();

	let r = await createCard(data);	
	}
}

start(1, 3, 4, 16);

let maleFilter = document.querySelector('.form-container');

maleFilter.addEventListener('input', function (e) {

	let delElem = document.querySelectorAll('.card');
	for (elem of delElem) {
	elem.remove()
}

	let target = e.target
	let filterCriteria = target.id

	if (filterCriteria === 'male' || filterCriteria === 'female') {
		criteria = 'gender';
	} else criteria = 'status';

	let url = `https://rickandmortyapi.com/api/character/?${criteria}=${filterCriteria}`

	async function getFileterChar(url) {
		return fetch(url);
	}
	async function printCharacters(...url) {

		for (arg of url) {
			let responce = await getFileterChar(arg);
			let data = await responce.json();

			for (key of data.results) {
				let r = await createCard(key);	
			}
		}
	}
	printCharacters(url)
})


