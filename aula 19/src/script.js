// Seleção de elementos do DOM

// Imagem e formulário
let imgPK = document.querySelector("#fotoPK");
let formPK = document.querySelector("#formPK");
let inputPK = document.querySelector("#inputPK");

// Informações básicas do Pokémon
let idPK = document.querySelector("#idPK");
let nomePK = document.querySelector("#nomePK");

// Tipos
let tipo1 = document.querySelector("#tipo1PK");
let tipo2 = document.querySelector("#tipo2PK");

// Habilidade, peso e altura
let habiPK = document.querySelector("#habiPK");
let pesoPK = document.querySelector("#pesoPK");
let alturaPK = document.querySelector("#alturaPK");

// Botões de navegação e som
let btnVoltar = document.querySelector("#btnVoltar");
let btnProximo = document.querySelector("#btnProximo");
let btnSom = document.querySelector("#btnSom");

// Começa com o primeiro Pokémon da Pokédex
let numeroPokedex = 1;

// Música de fundo
let musicaFundo = new Audio("./assets/pokémon Theme Song.mp3");
musicaFundo.loop = true;

// Alterna entre tocar e pausar a música
btnSom.addEventListener("click", () => {
    if (musicaFundo.paused) {
        musicaFundo.play();
        btnSom.textContent = "Pausar";
    } else {
        musicaFundo.pause();
        btnSom.textContent = "Play";
    }
});

// Função para buscar dados do Pokémon pela API
const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}

// Exibe os dados do Pokémon na tela
const showPokemon = async (pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);

    // Toca o som do Pokémon (se disponível)
    const audio = new Audio(dataPokemon.cries.latest);
    audio.play();

    try {
        // Exibe a imagem do Pokémon
        if (dataPokemon.sprites.front_default) {
            imgPK.src = dataPokemon.sprites.front_default;
        } else if (dataPokemon.sprites.front_shiny) {
            imgPK.src = dataPokemon.sprites.front_shiny;
        } else {
            imgPK.src = 'img/nao-encontrado.png';
        }

        // Caso a imagem falhe ao carregar
        imgPK.onerror = () => {
            imgPK.src = 'img/nao-encontrado.png';
        };
    } catch (erro) {
        console.error('Erro ao definir imagem do Pokémon:', erro);
        if (imgPK) {
            imgPK.src = 'img/nao-encontrado.png';
        }
    }

    // Preenche os dados na tela
    idPK.innerHTML = `<br>ID:${dataPokemon.id}`;
    nomePK.innerHTML = dataPokemon.name;
    tipo1.innerHTML = dataPokemon.types[0].type.name;

    // Verifica se há um segundo tipo
    if (dataPokemon.types[1] != undefined) {
        tipo2.innerHTML = dataPokemon.types[1].type.name;
    } else {
        tipo2.innerHTML = "";
    }

    // Outras informações
    habiPK.innerHTML = dataPokemon.abilities[0].ability.name;
    pesoPK.innerHTML = `Peso:${dataPokemon.weight / 10}kg`;
    alturaPK.innerHTML = `Altura:${dataPokemon.height / 10}m`;
}

// Evento para enviar o formulário e buscar Pokémon pelo nome/id
formPK.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede recarregamento da página
    showPokemon(inputPK.value.toLowerCase()); // Busca o Pokémon
});

// Botão "Voltar" — mostra Pokémon anterior
btnVoltar.addEventListener("click", (e) => {
    if (numeroPokedex > 1) {
        numeroPokedex--;
    }
    showPokemon(numeroPokedex);
});

// Botão "Próximo" — mostra próximo Pokémon
btnProximo.addEventListener("click", (e) => {
    if (numeroPokedex < 1025) {
        numeroPokedex++;
    }
    showPokemon(numeroPokedex);
});

// Carrega o primeiro Pokémon ao abrir a página
showPokemon(numeroPokedex);
