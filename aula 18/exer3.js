fetch("exer2.json")
  .then(response => response.json())
  .then(listaP => {
    let parag = document.getElementById("demo");

    listaP.pessoas.forEach(pessoa => {
      let meup = document.createElement("p");
      meup.innerHTML = `
        <strong>Nome:</strong> ${pessoa.nome}<br>
        <strong>Idade:</strong> ${pessoa.idade}<br>
        <strong>CPF:</strong> ${pessoa.cpf}<br>
        <strong>Telefone:</strong> ${pessoa.telefone}
        
      `;
      parag.appendChild(meup);
    });
  });
