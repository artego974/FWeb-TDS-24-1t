let nomes = ""
let cidade = ""
let parag = document.getElementById("demo")
fetch("data.Json")
.then(Response =>Response.json())
.then(listaP =>{
        nomes = listaP.pessoas[1].nome
        cidade = listaP.pessoas[1].local.cidade

        parag.innerHTML = "primeiro registro de array contem dados do <b>\""+ nomes + "\"</b> de <b>" + cidade +"</b>";
})

