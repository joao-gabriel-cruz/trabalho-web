// Função para mostrar conteúdo extra
document.getElementById("exploreButton").addEventListener("click", function () {
  const extraContent = document.getElementById("extraContent");
  if (extraContent.classList.contains("hidden")) {
    extraContent.classList.remove("hidden");
    this.textContent = "Esconder";
  } else {
    extraContent.classList.add("hidden");
    this.textContent = "Explorar Mais";
  }
});
