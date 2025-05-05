const { data, error } = require("jquery");

fetch("obejcts.json")

.then(Response => Response.json())
.then(data =>{
    const obejctsList = document.getElementById("object-list")
    data.obejcts.array.forEach(obj => {
        const listItem = document.createElement("p")
        listItem.textContent = obj
        obejctsList.appendChild(listItem)
    });

})
.catch(error => console.error("erro ao carregar o arquivo JSON", error))