const amigos = [];

const eAmigoInput = document.querySelector("#amigo");
const eAmigoList = document.querySelector("#listaAmigos");
const eAmigoResultado = document.querySelector("#resultado");

function adicionarAmigo(event) {
  event.preventDefault();

  const amigo = eAmigoInput.value.trim();

  if (!validarAmigo(amigo)) {
    return;
  }

  amigos.push(amigo);
  eAmigoInput.value = "";
}

function validarAmigo(amigo) {
  console.log(amigo, amigo.length, amigo.length <= 3);

  if (amigo.length < 3) {
    window.alert("O nome do amigo deve ter pelo menos 3 caracteres");
    return false;
  }

  if (amigos.includes(amigo)) {
    window.alert("Amigo já adicionado");
    return false;
  }

  return true;
}
