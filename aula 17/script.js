// Função para carregar o arquivo JSON e exibir os objetos
fetch('objects.json')  // Realiza uma requisição para buscar o arquivo 'objects.json'
  .then(response => response.json())  // Quando a resposta chegar, converte o corpo da resposta (JSON) para um objeto JavaScript
  .then(data => {  // Após a conversão, os dados (objeto JavaScript) são passados para a função
    const objectList = document.getElementById('object-list');  // Encontra o elemento HTML com id 'object-list' onde vamos exibir a lista

    // Itera sobre o array 'objects' dentro dos dados carregados
    data.objects.forEach(obj => {  // Para cada objeto no array 'objects', executa o código abaixo
      const listItem = document.createElement('li');  // Cria um novo item de lista (<li>)
      listItem.textContent = obj;  // Define o texto do item de lista como o nome do objeto (obj)
      objectList.appendChild(listItem);  // Adiciona o item de lista ao elemento <ul> (com id 'object-list') na página HTML
    });
  })
  .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));  // Caso ocorra algum erro durante o fetch ou processamento, ele será capturado aqui e exibido no consoles