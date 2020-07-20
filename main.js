let pokemonName = document.querySelector(".pokemon-name");
let displayPokemon = document.querySelector(".display-pokemon");
let pokemonSpriteMain = document.querySelector(".pokemon-sprite");
let emptyFieldError = document.querySelector(".error-empty");
let pokemonSpriteFrontDefault = document.getElementById(
  "pokemon-sprite-front-default"
);
let pokemonSpriteBackDefault = document.getElementById(
  "pokemon-sprite-back-default"
);
let pokemonSpriteFrontShiny = document.getElementById(
  "pokemon-sprite-front-shiny"
);
let pokemonSpriteBackShiny = document.getElementById(
  "pokemon-sprite-back-shiny"
);
let pokemonAbility = document.querySelector(".pokemon-ability");
let pokemonId = document.querySelector(".pokemon-id");

let pokemonHp = document.querySelector(".hp-value");
let pokemonAttack = document.querySelector(".attack-value");
let pokemonDefense = document.querySelector(".defense-value");
let pokemonSpecialAttack = document.querySelector(".spatk-value");
let pokemonSpecialDefense = document.querySelector(".spdef-value");
let pokemonSpeed = document.querySelector(".speed-value");
let pokemonStatTotal = document.querySelector(".total-value")

let pokemonType = document.getElementById("pokemon-types");
let errorDisplay = document.querySelector(".alert-danger");

getValue = () => {
  let urlValue = document.getElementById("pokemonName").value.toLowerCase();
  // console.log("urlValue", urlValue);
  let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${urlValue}`;
  pokemonSpriteFrontDefault.src = "";
  pokemonSpriteBackDefault.src = "";
  pokemonSpriteBackShiny.src = "";
  pokemonSpriteFrontShiny.src = "";
  pokemonSpriteBackShiny.style.display = "none";
  pokemonSpriteFrontShiny.style.display = "none";
  pokemonSpriteBackDefault.style.display = "none";
  pokemonSpriteFrontDefault.style.display = "none";
  errorDisplay.style.display = "none";
  if (displayPokemon.style.display === "inline") {
    displayPokemon.style.display = "none";
  }
  // console.log("pokeUrl", pokeUrl);
  getPokemonValue(pokeUrl);
};

getPokemonValue = (url) => {
  fetch(url)
    .then((results) => {
      console.log("response status", results.status);
      if (results.status === 200) {
        Promise.resolve(results.json()).then((value) => {
          pokemonDisplay(value);
        });
      } else if (results.status === 404) {
        notFoundDisplay();
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
};

notFoundDisplay = () => {
  errorDisplay.style.display = "block";
};

pokemonDisplay = (value) => {
  console.log("final", value);
  displayPokemon.style.display = "inline";
  console.log("pokemon type", value.types);
  let typeArray = [];
  for (let i = 0; i <= 1; i++) {
    if (value.types[i] !== undefined) {
      if ($("#" + "pokemon-type" + i).length == 0) {
        let pokeType = document.createElement("div");
        pokeType.id = "pokemon-type" + i;
        switch (value.types[i].type.name) {
          case "flying":
            pokeType.style.backgroundColor = "#af6bdb";
            break;

          case "fire":
            pokeType.style.backgroundColor = "rgb(240, 128, 48)";
            break;

          case "water":
            pokeType.style.backgroundColor = "rgb(104, 144, 240)";
            break;

          case "grass":
            pokeType.style.backgroundColor = "rgb(120, 200, 80)";
            break;

          case "normal":
            pokeType.style.backgroundColor = "rgb(168, 168, 120)";
            break;

          case "fighting":
            pokeType.style.backgroundColor = "rgb(192, 48, 40)";
            break;

          case "poison":
            pokeType.style.backgroundColor = "rgb(160, 64, 160)";
            break;

          case "electric":
            pokeType.style.backgroundColor = "rgb(248, 208, 48)";
            break;

          case "ground":
            pokeType.style.backgroundColor = "rgb(224, 192, 104)";
            break;

          case "psychic":
            pokeType.style.backgroundColor = "rgb(248, 88, 136)";
            break;

          case "rock":
            pokeType.style.backgroundColor = "rgb(184, 160, 56)";
            break;

          case "ice":
            pokeType.style.backgroundColor = "rgb(152, 216, 216)";
            break;

          case "bug":
            pokeType.style.backgroundColor = "rgb(168, 184, 32)";
            break;

          case "dragon":
            pokeType.style.backgroundColor = "rgb(112, 56, 248)";
            break;

          case "ghost":
            pokeType.style.backgroundColor = "rgb(112, 88, 152)";
            break;

          case "dark":
            pokeType.style.backgroundColor = "rgb(112, 88, 72)";
            break;

          case "steel":
            pokeType.style.backgroundColor = "rgb(184, 184, 208)";
            break;

          case "fairy":
            pokeType.style.backgroundColor = "rgb(238, 153, 172)";
            break;
          default:
            break;
        }
        pokeType.style.color = "#ffffff";
        pokeType.style.padding = "0.5rem";
        pokeType.style.borderRadius = "6px";
        pokeType.style.margin = "0 0.25rem";
        pokeType.innerHTML = `${value.types[i].type.name
          .charAt(0)
          .toUpperCase()}${value.types[i].type.name.slice(1)}`;
        pokemonType.appendChild(pokeType);
      } else {
        pokemonType.innerHTML = "";
        let pokeType = document.createElement("div");
        pokeType.id = "pokemon-type" + i;
        switch (value.types[i].type.name) {
          case "flying":
            pokeType.style.backgroundColor = "#af6bdb";
            break;

          case "fire":
            pokeType.style.backgroundColor = "rgb(240, 128, 48)";
            break;

          case "water":
            pokeType.style.backgroundColor = "rgb(104, 144, 240)";
            break;

          case "grass":
            pokeType.style.backgroundColor = "rgb(120, 200, 80)";
            break;

          case "normal":
            pokeType.style.backgroundColor = "rgb(168, 168, 120)";
            break;

          case "fighting":
            pokeType.style.backgroundColor = "rgb(192, 48, 40)";
            break;

          case "poison":
            pokeType.style.backgroundColor = "rgb(160, 64, 160)";
            break;

          case "electric":
            pokeType.style.backgroundColor = "rgb(248, 208, 48)";
            break;

          case "ground":
            pokeType.style.backgroundColor = "rgb(224, 192, 104)";
            break;

          case "psychic":
            pokeType.style.backgroundColor = "rgb(248, 88, 136)";
            break;

          case "rock":
            pokeType.style.backgroundColor = "rgb(184, 160, 56)";
            break;

          case "ice":
            pokeType.style.backgroundColor = "rgb(152, 216, 216)";
            break;

          case "bug":
            pokeType.style.backgroundColor = "rgb(168, 184, 32)";
            break;

          case "dragon":
            pokeType.style.backgroundColor = "rgb(112, 56, 248)";
            break;

          case "ghost":
            pokeType.style.backgroundColor = "rgb(112, 88, 152)";
            break;

          case "dark":
            pokeType.style.backgroundColor = "rgb(112, 88, 72)";
            break;

          case "steel":
            pokeType.style.backgroundColor = "rgb(184, 184, 208)";
            break;

          case "fairy":
            pokeType.style.backgroundColor = "rgb(238, 153, 172)";
            break;
          default:
            break;
        }
        pokeType.style.color = "#ffffff";
        pokeType.style.padding = "0.5rem";
        pokeType.style.borderRadius = "6px";
        pokeType.style.margin = "0 1rem";
        pokeType.innerHTML = `${value.types[i].type.name
          .charAt(0)
          .toUpperCase()}${value.types[i].type.name.slice(1)}`;
        pokemonType.appendChild(pokeType);
      }
    } else {
      console.log("single type");
    }
  }
  pokemonName.innerHTML =
    value.species.name.charAt(0).toUpperCase() + value.species.name.slice(1);
  if (value.sprites.front_default !== null) {
    pokemonSpriteFrontDefault.style.display = "inline";
    pokemonSpriteFrontDefault.src = value.sprites.front_default;
  }
  if (value.sprites.back_default !== null) {
    pokemonSpriteBackDefault.style.display = "inline";
    pokemonSpriteBackDefault.src = value.sprites.back_default;
  }
  if (value.sprites.front_shiny !== null) {
    pokemonSpriteFrontShiny.style.display = "inline";
    pokemonSpriteFrontShiny.src = value.sprites.front_shiny;
  }
  if (value.sprites.back_shiny !== null) {
    pokemonSpriteBackShiny.style.display = "inline";
    pokemonSpriteBackShiny.src = value.sprites.back_shiny;
  }

  if (value.id < 10) {
    pokemonId.innerHTML = "#00" + value.id;
  } else if (value.id < 100) {
    pokemonId.innerHTML = "#0" + value.id;
  } else {
    pokemonId.innerHTML = "#" + value.id;
  }

  let sumStats = 0;
  let statArray = [pokemonHp, pokemonAttack, pokemonDefense, pokemonSpecialAttack, pokemonSpecialDefense, pokemonSpeed]
  for(let i=0; i<statArray.length; i++){
    statArray[i].innerHTML = value.stats[i].base_stat;
    sumStats = sumStats + value.stats[i].base_stat;
  }

  pokemonStatTotal.innerHTML = sumStats

  let arrayAbility = [];
  for (let i = 0; i < value.abilities.length; i++) {
    console.log(value.abilities[i]);
    let abilityName = value.abilities[i].ability.name
      arrayAbility.push(" " + abilityName.charAt(0).toUpperCase()+ abilityName.slice(1));
    console.log(arrayAbility);
  }
  pokemonAbility.innerHTML = arrayAbility;
};
