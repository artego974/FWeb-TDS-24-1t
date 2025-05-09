alert("ola mundo")
var titulo = document.querySelector("#titulo")
titulo.textContent = "Segundo";
titulo.style.color = "red";

function mostrarAlerta(){
    alert("Funciona");
}
function mostrarTexto(texto){
    alert(texto);
}

titulo.onclick = mostrarTexto("Feliz Pascoa");