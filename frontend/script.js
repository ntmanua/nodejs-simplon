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
  const sectionAffiche = document.querySelector('.affiche');

  data.forEach((affiche) => {
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

    sectionAffiche.appendChild(imageAffiche);
    sectionAffiche.appendChild(titreAffiche);
    sectionAffiche.appendChild(descriptionAffiche);
    sectionAffiche.appendChild(genreAffiche);
    sectionAffiche.appendChild(dateAffiche);
  });
}

fetchData()
  .then((data) => {
    genererAffiche(data);
  })
  .catch((error) => {
    console.error(error);
  });