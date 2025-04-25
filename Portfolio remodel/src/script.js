const elemts = document.querySelectorAll(".hidden")
const myO = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
        
    })
})
elemts.forEach((elemnt) => {
    myO.observe(elemnt)
})
const conteudoSection = document.querySelector("#conteudo .cards-container");

const exerciciosPorAula = [
  3, 1, 6, 2, 4, 3, 5, 1, 2, 3,
  6, 4, 3, 2, 1, 3, 2, 4, 5, 1,
  3, 6, 2, 4
]; 

for (let i = 0; i < exerciciosPorAula.length; i++) {
  const numExercicios = exerciciosPorAula[i];
  const card = document.createElement("div");
  card.classList.add("card");

  
  const h2 = document.createElement("h2");
  h2.textContent = `Aula ${i + 1}`;

  const linksDiv = document.createElement("div");
  linksDiv.classList.add("links");

  for (let j = 1; j <= numExercicios; j++) {
    const link = document.createElement("a");

    //link certo pra colocar as aulas
    link.href = `../aula ${i + 1}/exer${j}.html`;
    link.textContent = `Exercício ${j}`;
    link.target = "_blank"; 

    linksDiv.appendChild(link);
  }

  card.appendChild(h2);
  card.appendChild(linksDiv);

  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });


  linksDiv.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => e.stopPropagation());
  });

  conteudoSection.appendChild(card);
}
const header = document.querySelector("header");

const sentinela = document.createElement("div");
sentinela.style.height = "1px";  
document.body.prepend(sentinela);


const headerObserver = new IntersectionObserver(([entry]) => {
  if (!entry.isIntersecting) {
    header.classList.add("fixed");  
  } else {
    header.classList.remove("fixed");  
  }
}, {
  rootMargin: "-100% 0px 0px 0px",  
  threshold: 0  
});

headerObserver.observe(sentinela); 
