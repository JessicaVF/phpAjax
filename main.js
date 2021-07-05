const myCards = document.querySelector(".myCards");

function getAllGateaux() {
  let requete = new XMLHttpRequest();
  requete.open(
    "GET",
    "http://localhost/humanBooster/garages/index.php?controller=gateau&task=indexTest"
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
  });
}
