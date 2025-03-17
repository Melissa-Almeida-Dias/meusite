document.addEventListener("DOMContentLoaded", function () {
  fetch("header.hbs")
    .then((response) => response.text())
    .then((data) => {
      const template = Handlebars.compile(data);
      document.getElementById("header").innerHTML = template();
    })
    .catch((error) => console.error("Erro ao carregar o cabeçalho:", error));
});
