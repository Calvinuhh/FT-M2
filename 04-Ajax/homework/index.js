const verAmigosBtn = document.querySelector("#boton");
const listaDesordenada = document.querySelector("#lista");
let amigosMostrados = false;

verAmigosBtn.addEventListener("click", () => {
  if (amigosMostrados === false) {
    $.get("http://localhost:5000/amigos", (amigos) => {
      amigos.forEach((amigo) => {
        let li = document.createElement("li");

        li.innerHTML = `${amigo.name}`;

        listaDesordenada.appendChild(li);
      });
    });
  }
  amigosMostrados = true;
});

const inputSearch = document.querySelector("#input");
const btnSearch = document.querySelector("#search");
const spanAmigo = document.querySelector("#amigo");

btnSearch.addEventListener("click", () => {
  $.get(`http://localhost:5000/amigos/${inputSearch.value}`, (amigo) => {
    spanAmigo.innerHTML = `${amigo.name}`;
  });
});

const inputDelete = document.querySelector("#inputDelete");
const deleteBtn = document.querySelector("#delete");
const success = document.querySelector("#success");


deleteBtn.addEventListener("click", () => {
  amigosMostrados = false;

  $.ajax({
    url: `http://localhost:5000/amigos/${inputDelete.value}`,
    type: "DELETE",
    success: () => {
      success.innerHTML = `El amigo fue eliminado con exito!`;
    },
  });
});
