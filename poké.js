let id = 1;
//const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;

async function pokeAPI() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        const { height, weight, stats, sprites, species, types, moves } = data;

        const pokeName = document.getElementById("poke-name");
        const name = species.name;
        pokeName.innerHTML = name;

        const pokePic = document.getElementById("poke-pic");
        const imagePath = sprites.front_default;
        console.log(imagePath);
        pokePic.src = imagePath;

        const one = document.getElementById("one");
        one.textContent = "blank";
        const two = document.getElementById("two");
        two.textContent = "blank";
        const three = document.getElementById("three");
        three.textContent = "blank";

        const list = [one, two, three];

        for (let i = 0; i < types.length; i++ ) {
            const typeName = types[i].type.name;
            const item = list[i];
            item.innerHTML = typeName;
            if (typeName == "normal") {
                item.style.backgroundColor = "#A8A77A";
            } else if (typeName == "fire") {
                item.style.backgroundColor = "#EE8130";
            } else if (typeName == "water") {
                item.style.backgroundColor = "#6390F0";
            } else if (typeName == "electric") {
                item.style.backgroundColor = "#F7D02C";
            } else if (typeName == "grass") {
                item.style.backgroundColor = "#7AC74C";
            } else if (typeName == "ice") {
                item.style.backgroundColor = "#96D9D6";
            } else if (typeName == "fighting") {
                item.style.backgroundColor = "#C22E28";
            } else if (typeName == "poison") {
                item.style.backgroundColor = "#A33EA1";
            } else if (typeName == "ground") {
                item.style.backgroundColor = "#E2BF65";
            } else if (typeName == "flying") {
                item.style.backgroundColor = "#A98FF3";
            } else if (typeName == "psychic") {
                item.style.backgroundColor = "#F95587";
            } else if (typeName == "bug") {
                item.style.backgroundColor = "#A6B91A";
            } else if (typeName == "rock") {
                item.style.backgroundColor = "#B6A136";
            } else if (typeName == "ghost") {
                item.style.backgroundColor = "#735797";
            } else if (typeName == "dragon") {
                item.styl.backgroundColor = "#6F35FC";
            } else if (typeName == "dark") {
                item.style.backgroundColor = "#705746";
            } else if (typeName == "steel") {
                item.style.backgroundColor = "#B7B7CE";
            } else {
                item.style.backgroundColor = "#D685AD";
            }
        }

        for (const item of list) {
            if (item.textContent == "blank") {
                item.hidden = true;
            }
        }

        const infoCard = document.getElementById("infoCard");
        const infoButton = document.getElementById("infoButton");
        const movesButton = document.getElementById("movesButton");

        infoButton.addEventListener("click", (event) => {
            infoCard.textContent = "";
            movesButton.style.backgroundColor = "#E8E8E8";
            infoButton.style.backgroundColor = "#7CFF79";
            const hp = stats[0].base_stat;
            const attack = stats[1].base_stat;
            const defense = stats[2].base_stat;
            const specialAttack = stats[3].base_stat;
            const specialDefense = stats[4].base_stat;
            const speed = stats[5].base_stat;
    
            const cardHtml = `
                    <p>height: ${(height * 0.1).toFixed(1)}m</p>
                    <p>weight: ${(weight / 10).toFixed(1)}kg</p>
                    <p>hp: ${hp}</p>
                    <p>attack: ${attack}</p>
                    <p>defense: ${defense}</p>
                    <p>special-attack: ${specialAttack}</p>
                    <p>special-defense: ${specialDefense}</p>
                    <p>speed: ${speed}</p>
                `;
            infoCard.innerHTML = cardHtml;
            infoCard.style.lineHeight = 0.3;
            infoCard.style.fontSize = "26px";
        });

        movesButton.addEventListener("click", (event) => {
            infoButton.style.backgroundColor = "#E8E8E8";
            movesButton.style.backgroundColor = "#7CFF79";
            infoCard.textContent = "";
            let cardHTML = "";
            for (let i = 0; i < moves.length; i++) {
                if (i != moves.length - 1) {
                    cardHTML += `${moves[i].move.name}, `;
                } else {
                    cardHTML += `${moves[i].move.name}`;
                }
            }
            infoCard.innerHTML = cardHTML;
            infoCard.style.lineHeight = 1;
            infoCard.style.fontSize = "26px";
            if (infoCard.textContent.split(',').length > 60) {
                infoCard.style.fontSize = "15px";
            }
        });
      })
      .catch((error) => {
        console.error("There was a problem fetching the pokemon data:", error);
        infoCard.innerHTML = "Failed to fetch pokemon data.";
      });
}
pokeAPI();
const leftArrow = document.getElementById("leftArrow");
leftArrow.addEventListener("click", (event) => {
    if (id != 1) {
        id--;
    }
    infoCard.textContent = "";
    infoButton.style.backgroundColor = "#E8E8E8";
    movesButton.style.backgroundColor = "#E8E8E8";
    pokeAPI();
});

const rightArrow = document.getElementById("rightArrow");
rightArrow.addEventListener("click", (event) => {
    if (id <= 1016) {
        id++;
    }
    infoCard.textContent = "";
    infoButton.style.backgroundColor = "#E8E8E8";
    movesButton.style.backgroundColor = "#E8E8E8";
    pokeAPI();
});