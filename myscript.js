// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
const cardUser = document.getElementById("card");
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const team = [
  {
    immagine: "wayne-barnett-founder-ceo.jpg",
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
  },
  {
    immagine: "angela-caroll-chief-editor.jpg",
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
  },
  {
    immagine: "walter-gordon-office-manager.jpg",
    nome: "Walter Gordon",
    ruolo: "Office Manager",
  },
  {
    immagine: "angela-lopez-social-media-manager.jpg",
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
  },
  {
    immagine: "scott-estrada-developer.jpg",
    nome: "Scott Estrada",
    ruolo: "Developer",
  },
  {
    immagine: "barbara-ramos-graphic-designer.jpg",
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
  },
];

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
console.log(team[0], team[1], team[2], team[3], team[4], team[5]);
for (const user of team) {
  console.log("name: " + user.nome);
  console.log("ruolo: " + user.ruolo);
  console.log("foto: " + user.immagine);
}
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

for (const user of team) {
  cardUser.innerHTML += `
    <div class="card" style="width: 17.5rem;">
          <img src="./img/${user.immagine}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${user.nome}</h5>
            <p class="card-text">${user.ruolo}</p>
          </div>
        </div>
    `;
}
