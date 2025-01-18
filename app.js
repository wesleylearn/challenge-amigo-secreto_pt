const amigos = [];

const eAmigoInput = document.querySelector("#amigo");
const eAmigoList = document.querySelector("#listaAmigos");
const eAmigoResultado = document.querySelector("#resultado");

function adicionarAmigo(event) {
  event.preventDefault();

  const amigo = eAmigoInput.value.trim();

  amigos.push(amigo);
  eAmigoInput.value = "";
}
