$(document).ready(function() {
  var phrases = [
    "Tu sonrisa ilumina mi día como el sol ilumina la primavera",
    "Incluso las flores amarillas se sentirían celosas de tu belleza"
  ];

  var currentIndex = 0;

  // Función para cambiar el contenido al hacer clic en el título
  $('#pageTitle').click(function() {
    if (currentIndex < phrases.length) {
      $('#pageTitle').text(phrases[currentIndex]);
      currentIndex++;
    } else {
      window.location.href = "../flowers/flowers.html";
    }
  });
});
