fetch("exer4.json")
  .then(response => response.json())
  .then(data => {
    const cursos = {};

    data.alunos.forEach(aluno => {
      const curso = aluno.curso;
      if (!cursos[curso]) {
        cursos[curso] = [];
      }
      cursos[curso].push(aluno.nome);
    });

    const resultado = document.getElementById("resultado");
    for (let curso in cursos) {
      const cursoDiv = document.createElement("div");
      cursoDiv.innerHTML = `<h3>Curso: ${curso}</h3><ul>` + 
        cursos[curso].map(nome => `<li>${nome}</li>`).join('') + 
        `</ul>`;
      resultado.appendChild(cursoDiv);
    }
  });
