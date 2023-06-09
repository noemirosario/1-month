var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function generarTexto() {
  const textos = [
    "Cada día me haces más feliz, gracias por ser mi novio",
    "Eres mi persona favorita en el mundo entero",
    "Contigo he descubierto el verdadero amor",
    "Gracias por hacerme sentir especial todos los días",
    "Eres el mejor novio que cualquier persona podría desear",
    "Te quiero más de lo que las palabras pueden expresar",
    "Siempre me haces sentir segura",
    "Contigo todo es más fácil y más bonito",
    "Eres mi felicidad, mi alegría y mi todo",
    "Eres el regalo más bonito que la vida me ha dado y cada día me siento más afortunada de tenerte a mi lado"
  ];

  const elementos = document.querySelectorAll(".random-text");

  elementos.forEach(elemento => {
    const indice = Math.floor(Math.random() * textos.length);
    elemento.innerHTML = textos[indice];
  });
}

generarTexto();

