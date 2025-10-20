function btnMai() {
  const input = document.getElementById("input-text");
  const resultado = document.getElementById("textAreaResult");
  resultado.value = input.value.toUpperCase();
}

function btnMin() {
  const input = document.getElementById("input-text");
  const resultado = document.getElementById("textAreaResult");
  resultado.value = input.value.toLowerCase();
}

function btnCap() {
  const input = document.getElementById("input-text");
  const resultado = document.getElementById("textAreaResult");

  let valorAtual = input.value;
  if (valorAtual.length > 0) {
    let primeiraLetra = valorAtual.charAt(0).toUpperCase();
    let restante = valorAtual.slice(1).toLowerCase();
    resultado.value = primeiraLetra + restante;
  }
}

function btnClr() {
  const input = document.getElementById("input-text");
  const resultado = document.getElementById("textAreaResult");
  input.value = "";
  resultado.value = "";

  document.getElementById("contPalavra").textContent = "0";
  document.getElementById("contCarac").textContent = "0";
}

function btnContar() {
  const texto = document.getElementById("input-text").value;

  const contagemCaracteres = texto.length;

  const palavras = texto.trim().split(/\s+/).filter(Boolean);
  const contagemPalavras = palavras.length;

  document.getElementById("contPalavra").textContent = contagemPalavras;
  document.getElementById("contCarac").textContent = contagemCaracteres;
}

function abrirLinkGithub(event) {
  event.preventDefault();
  chrome.tabs.create({ url: "https://github.com/Kadisa-Cyber" });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-max").addEventListener("click", btnMai);
  document.getElementById("btn-min").addEventListener("click", btnMin);
  document.getElementById("btn-cap").addEventListener("click", btnCap);
  document.getElementById("btn-clr").addEventListener("click", btnClr);
  document.getElementById("input-text").addEventListener("input", btnContar);
  document
    .getElementById("link-github")
    .addEventListener("click", abrirLinkGithub);
});
