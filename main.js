const myCards = document.querySelector(".myCards");
const btnGetGateaux = document.querySelector("#getGateaux");

btnGetGateaux.addEventListener("click", (event) => {
  getAllGateaux();
});

/**
 * Get all Gateaux
 */

function getAllGateaux() {
  let requete = new XMLHttpRequest();
  requete.open(
    "GET",
    "http://localhost/humanBooster/garages/index.php?controller=gateau&task=indexApi"
  );

  requete.onload = () => {
    let result = JSON.parse(requete.responseText);

    makeCardsGateaux(result);
  };

  requete.send();
}

/**
 *
 * Cards for the gateaux (all of them at the same time)
 */
function makeCardsGateaux(tableauGateau) {
  let cards = "";

  tableauGateau.forEach((element) => {
    card = `        
      
      <div class="col-4 p-3">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <p class="card-text">${element.flavor}</p>
              <button value="${element.id}" class="btn btn-primary showGateau">voir le gateau</button>
            </div>
        </div>
      </div>`;

    cards += card;

    myCards.innerHTML = cards;
  });
  document.querySelectorAll(".showGateau").forEach((button) => {
    button.addEventListener("click", (event) => {
      showGateau(button.value);
    });
  });
}

/**
 *
 * Show a single and specific gateau
 */
function showGateau(id) {
  let requete = new XMLHttpRequest();

  requete.open(
    "GET",
    `http://localhost/humanBooster/garages/index.php?controller=gateau&task=showApi&id=${id}`
  );

  requete.onload = () => {
    let result = JSON.parse(requete.responseText);
    let gateau = result.gateau;
    let recettes = result.recettes;
    cardGateau(gateau, recettes);
  };

  requete.send();
}
/**
 * Make a card for a single and specific Gateau
 */
function cardGateau(gateau, recettes) {
  myCardGateau = `        <div class="col-4 p-3">

    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${gateau.name}</h5>
        <p class="card-text">${gateau.flavor}</p>
        </div>
             <button class="btn btn-success retourGateaux">Retour aux Gateaux</button>
     </div> 
   
</div>`;
  myCards.innerHTML = myCardGateau;

  cardsRecettes = "";

  recettes.forEach((recette) => {
    cardRecette = `        <div class="row" data-recette="${recette.id}">
    <hr>
        <p><strong>${recette.name}</strong></p>
        <p>${recette.description}</p>
<button class="btn btn-danger supprRecette" value="${recette.id}">Supprimer</button>
       
    <hr>
</div>`;

    cardsRecettes += cardRecette;
  });
  myCards.innerHTML += cardsRecettes;
  document
    .querySelector(".retourGateaux")
    .addEventListener("click", (event) => {
      getAllGateaux();
    });
}
