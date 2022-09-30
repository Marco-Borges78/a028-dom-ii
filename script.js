//Exercício 01

function adicionaItem(event) {
   const novoItem = document.createElement("article")

   //Exercício 02

   novoItem.classList.add("item")
   novoItem.addEventListener("click", removeItem)
   const conteudo = document.createTextNode("item add")
   novoItem.appendChild(conteudo)
   const container = document.getElementById("container")
   container.insertAdjacentElement("beforeend", novoItem)
}

//Exercício 03

function removeItem(event){
    event.target.remove()
}