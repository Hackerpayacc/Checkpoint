const namepokemon = document.querySelector(".name");
const type = document.querySelector(".type");
const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const bio = document.querySelector(".biq");
const icon = document.querySelector(".icon");
const searchInput = document.getElementById("inpurSearch");
searchInput.addEventListener("change", (event) => {
  const pokemonName = searchInput.value.toLowerCase().trim();
  if (pokemonName) {
    fetchData(pokemonName);
  }
});

async function fetchData(pokemonName) {
  try {
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const data = await result.json();

    namepokemon.innerHTML = data.name;
    type.innerHTML = data.types.map((type) => type.type.name).join(", ");
    height.innerHTML = data.height;
    weight.innerHTML = data.weight;
    bio.innerHTML = data.species.url;
    icon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;
  } catch (error) {
    console.error("lỗi:", error);
  }
}

function fetchNames(pokemonName = "s") {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      displayNames([data.name]);
    })
    .catch((error) => console.error("Error fetching names:", error));
}

function displayNames(names) {
  const nameList = document.getElementById("nameList");
  nameList.innerHTML = "";

  names.forEach((name) => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    nameList.appendChild(listItem);
  });
}

window.onload = function () {
  fetchNames();
};
