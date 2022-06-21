// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

console.log(data);
for (let pokemon of data) {
  let card = document.createElement("li");
  card.className = "card";

  let cardTitle = document.createElement("h2");
  cardTitle.className = "card--title";
  cardTitle.textContent = pokemon.name;

  let cardImg = document.createElement("img");
  cardImg.className = "card--img";
  cardImg.width = 256;
  cardImg.src = pokemon.sprites.other["official-artwork"].front_default;

  let cardText = document.createElement("ul");
  cardText.className = "card--text";

  for (let singleStat of pokemon.stats) {
    let pokemonStat = document.createElement("li");
    pokemonStat.textContent = `${singleStat.stat.name}: ${singleStat.base_stat}`;
    cardText.appendChild(pokemonStat);
  }
  card.append(cardTitle, cardImg, cardText);
  document.querySelector(".cards").append(card);
}
