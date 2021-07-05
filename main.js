const myCards = document.querySelector(".myCards");
const btnGetGateaux = document.querySelector("#getGateaux");

btnGetGateaux.addEventListener("click", (event) => {
  getAllGateaux();
});

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
    const btnsShowCake = document.querySelector(".showGateau");
    btnsShowCake.addEventListener("click", (event) => {
      showGateaux(element.id);
    });
  });
}

function showGateaux(id) {
  let requete = new XMLHttpRequest();

  requete.open(
    "GET",
    `http://localhost/humanBooster/garages/index.php?controller=gateau&task=showApi&id=${id}`
  );

  requete.onload = () => {
    let result = JSON.parse(requete.responseText);

    console.log(result);
    console.log(id);
  };

  requete.send();
}
