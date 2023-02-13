var films = [{
    name: "Deadpool",
    years: 2016,
    authors: "Tim Miller"
  },
  {
    name: "Spiderman",
    years: 2002,
    authors: "Sam Raimi"
  },
  {
    name: "Scream",
    years: 1996,
    authors: "Wes Craven"
  },
  {
    name: "It: chapter 1",
    years: 2019,
    authors: "Andy Muschietti"
  }
];

// tentative sorting
// let film = document.getElementById("film")
// let sortFilms = document.getElementById("sortNoms");
// let sortAnnee = document.getElementById("sortAnnee");
let table = document.querySelector("table");


// Afficher les variables dans un tableau
function generateTableHead(data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(data) {
  table.innerHTML = ""

  let entete = Object.keys(films[0]);
  generateTableHead(entete)

  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

generateTable(films);

// Afficher les inputs
let boutonAjout = document.querySelector("#ajouter")
let clicked = false;

boutonAjout.onclick = function () {
  var theDiv = document.getElementById("afficheInput");
  if (!clicked) { // Autoriser seulement un clic
    clicked = true;
    theDiv.innerHTML += `
      <div class="inputs text-center">
        Film : <input type="text" id="film" name="film"> 
        Année : <input type="text" id="annee" name="annee">  
        Réalisateur : <input type="text" id="real" name="real">
        <button class="btn ajouter" id="boutonCheck" >
          <i class="fa-solid fa-plus"></i> Ajouter
        </button>
      </div>`;
  }
  const boutonAttention = document.getElementById("boutonCheck");
  boutonAttention.onclick = function Checkfilm() {
    // Selection de l'input et de sa valeur
    // var inputTable = document.getElementById("inputInTable");
    var attention = document.getElementById("attention");
    var inputFilm = document.getElementById("film").value;
    var inputAnnee = document.getElementById("annee").value;
    var inputReal = document.getElementById("real").value;

    let message = ""

    if (inputFilm.length < 3) {
      message += "[Film] Entrez plus de 2 caractères <br>";
    }

    if (inputAnnee < 1990 || inputAnnee > 2023) {
      message += "[Année] Entrez une année entre 1990 et 2023 <br>";
    }

    if (inputReal.length < 6) {
      message += "[Réalisateur] Entrez un minimum de 5 caractères ";
    }

    if (message !== "") {
      attention.innerHTML = message
    } else {

      films.push({
        name: inputFilm.charAt(0).toUpperCase() + inputFilm.slice(1),
        years: parseInt(inputAnnee),
        authors: inputReal.charAt(0).toUpperCase() + inputReal.slice(1)
      })

      generateTable(films)
    }
  };
};