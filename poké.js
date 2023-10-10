const id = 1;
const URL = `https://pokeapi.co/api/v2/ability/${id}/`;

document.addEventListener("DOMContentLoaded", () => {
    const infoCard = document.getElementById("infoCard");
  
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const { height, weight, stats, sprites } = data;
        const hp = stats[0].base_stat;
        const attack = stats[1].base_stat;
        const defense = stats[2].base_stat;
        const specialAttack = stats[3].base_stat;
        const specialDefense = stats[4].base_stat;
        const speed = stats[5].base_stat;
  
        const cardHtml = `
                <p>height: ${height * 0.3}</p>
                <p>weight: ${weight}</p>
                <p>hp: ${hp}</p>
                <p>attack: ${attack}</p>
                <p>defense: ${defense}</p>
                <p>special-attack: ${specialAttack}</p>
                <p>special-defense: ${specialDefense}</p>
                <p>speed: ${speed}</p>
            `;
  
        infoCard.innerHTML = cardHtml;
      })
      .catch((error) => {
        console.error("There was a problem fetching the pokeom data:", error);
        infoCard.innerHTML = "Failed to fetch pokemon data.";
      });
  });

  /*
let count = 0;
document.addEventListener("click", (event) => {
    const button = document.getElementById("button");

    if (event.target === button) {
        count++;
        const textElement = document.getElementById("button-info");
        textElement.textContent = count;
    }
})
*/