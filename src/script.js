// Função para redirecionar após o tempo de carregamento
function redirectAfterLoading() {
  const src = localStorage.getItem("src");
  console.log({src});

  setTimeout(() => {
    window.location.href = src || "pages/home/index.html"; // Substitua pelo link da página de destino
  }, 4000); // Tempo de carregamento em milissegundos (3 segundos)
}

// Inicia o redirecionamento após o carregamento da página
document.addEventListener("DOMContentLoaded", redirectAfterLoading);

