async function fetchData() {
  try {
    const response = await fetch('http://localhost:3000/api/stuff');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

function genererAffiche(data) {
  const sectionAffiche = document.querySelector('.tableau');
  let i = 1;
  data.forEach((affiche) => {
    const affiche = document.querySelector(`.affiche${i}`);
    i++;
    const imageAffiche = document.createElement('img');
    imageAffiche.src = affiche.image;
    const titreAffiche = document.createElement('h2');
    titreAffiche.innerText = affiche.nom;
    const descriptionAffiche = document.createElement('p');
    descriptionAffiche.innerText = affiche.description;
    const genreAffiche = document.createElement('p');
    genreAffiche.innerText = affiche.genre;
    const dateAffiche = document.createElement('p');
    dateAffiche.innerText = affiche.date;

    affiche.appendChild(imageAffiche);
    affiche.appendChild(titreAffiche);
    affiche.appendChild(descriptionAffiche);
    affiche.appendChild(genreAffiche);
    affiche.appendChild(dateAffiche);
  });
}

fetchData()
  .then((data) => {
    genererAffiche(data);
  })
  .catch((error) => {
    console.error(error);
  });