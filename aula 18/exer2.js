
let parag = document.getElementById("demo");

fetch("exer2.json")
  .then(response => response.json())
  .then(listaP => {
    for (let i = 0; i < 5; i++) {
      let nomes = listaP.pessoas[i].nome;

      let meup = document.createElement("p");
      meup.innerText = nomes;

      parag.appendChild(meup);
    }
  })
  

