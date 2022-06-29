let elList = document.querySelector(".js-list");
for (array of films) {
	let elItem = document.createElement("li");
	let elId = document.createElement("span");
	let elTitle = document.createElement("h2");
	let elImg = document.createElement("img");
	let elText = document.createElement("p");
	let elDate = document.createElement("span");
	let elGenres = document.createElement("span"); 
	let date = new Date(array.release_date * 1000);

	elId.textContent = `Film id: ${array.id}`;
	elTitle.textContent = `${array.title}`;
	elImg.src = `${array.poster}`;
	elText.textContent = `${array.overview}`;
	elDate.textContent = `Year:  ${date.getFullYear()}`;
	elGenres.textContent = `Type: ${array.genres}`;

	elItem.setAttribute("class", "item");
	elId.setAttribute("class", "content");
	elTitle.setAttribute("class", "content");
	elImg.setAttribute("class", "img");
	elText.setAttribute("class", "content");
	elDate.setAttribute("class", "content");
	elGenres.setAttribute("class", "content");

	elItem.appendChild(elId);
	elItem.appendChild(elTitle);
	elItem.appendChild(elImg);
	elItem.appendChild(elText);
	elItem.appendChild(elDate);
	elItem.appendChild(elGenres);
	elList.appendChild(elItem);
}
