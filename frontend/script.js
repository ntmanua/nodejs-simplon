async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/api/stuff");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

function genererAffiche(data) {
  let i = 1;
  data.forEach((affiche) => {
    let sectionAffiche = document.querySelector(`.affiche${i}`);
    i++;
    const sectionText = document.createElement("div");
    sectionText.classList.add("text");
    const imageAffiche = document.createElement("img");
    imageAffiche.src = affiche.image;
    const titreAffiche = document.createElement("h2");
    titreAffiche.innerText = affiche.nom;
    const descriptionAffiche = document.createElement("p");
    descriptionAffiche.innerText = affiche.description;
    const genreAffiche = document.createElement("p");
    genreAffiche.innerText = affiche.genre;
    const dateAffiche = document.createElement("p");
    dateAffiche.innerText = affiche.date;

    sectionAffiche.appendChild(imageAffiche);
    sectionAffiche.appendChild(sectionText);
    sectionText.appendChild(titreAffiche);
    sectionText.appendChild(genreAffiche);
    sectionText.appendChild(dateAffiche);
    sectionText.appendChild(descriptionAffiche);
  });
}

fetchData()
  .then((data) => {
    genererAffiche(data);
  })
  .catch((error) => {
    console.error(error);
  });

function cacherSection() {
  for (let i = 1; i <= 5; i++) {
    let affiche = document.querySelector(`.affiche${i}`);
    affiche.style.display = "none";
  }
}


function cacherCouleur() {
  for (let i = 1; i <= 5; i++) {
      document.querySelector(`#btn-${i}`).classList.remove("active");
    }
}
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.querySelector("#btn-4");
const btn5 = document.querySelector("#btn-5");

cacherSection();
btn1.classList.add("active");
document.querySelector(".affiche1").style.display = "flex";

btn1.addEventListener("click", () => {
  cacherSection();
  cacherCouleur();
  btn1.classList.add("active");
  document.querySelector(".affiche1").style.display = "flex";
});

btn2.addEventListener("click", () => {
  cacherSection();
  cacherCouleur();
  btn2.classList.add("active");
  document.querySelector(".affiche2").style.display = "flex";
});

btn3.addEventListener("click", () => {
  cacherSection();
  cacherCouleur();
  btn3.classList.add("active");
  document.querySelector(".affiche3").style.display = "flex";
});

btn4.addEventListener("click", () => {
  cacherSection();
  cacherCouleur();
  btn4.classList.add("active");
  document.querySelector(".affiche4").style.display = "flex";
});

btn5.addEventListener("click", () => {
  cacherSection();
  cacherCouleur();
  btn5.classList.add("active");
  document.querySelector(".affiche5").style.display = "flex";
});
