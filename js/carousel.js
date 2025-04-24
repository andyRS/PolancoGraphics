/**
 * Script simplificado para el carrusel horizontal
 * Implementa un carrusel básico con autoplay y controles
 */
document.addEventListener("DOMContentLoaded", function () {
  initSimpleCarousel();
});

function initSimpleCarousel() {
  // Elementos del carrusel
  const slidesContainer = document.querySelector(".carousel-slides");
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".carousel-control.prev");
  const nextBtn = document.querySelector(".carousel-control.next");
  const indicators = document.querySelectorAll(
    ".carousel-indicators .indicator"
  );

  // Si no existe el carrusel, salir de la función
  if (!slidesContainer || !slides.length) return;

  // Variables de control
  let currentIndex = 0;
  let slideWidth = slides[0].clientWidth;
  let autoplayInterval;
  const autoplayDelay = 5000; // 5 segundos

  // Función para ir a un slide específico
  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    currentIndex = index;

    // Actualizar la posición del contenedor de slides
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;

    // Actualizar indicadores
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index);
    });

    // Reiniciar autoplay
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  // Iniciar autoplay
  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, autoplayDelay);
  }

  // Event listeners para botones de navegación
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener("click", () => {
      goToSlide(currentIndex + 1);
    });
  }

  // Event listeners para indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      goToSlide(index);
    });
  });

  // Actualizar ancho de slide en resize
  function updateSlideWidth() {
    slideWidth = slides[0].clientWidth;
    goToSlide(currentIndex); // Reposicionar slides
  }

  window.addEventListener("resize", updateSlideWidth);

  // Manejo de gestos táctiles (swipe)
  let touchStartX = 0;
  let touchEndX = 0;

  slidesContainer.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    // Pausar autoplay durante el swipe
    clearInterval(autoplayInterval);
  });

  slidesContainer.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    // Reiniciar autoplay después del swipe
    startAutoplay();
  });

  function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    const threshold = 50; // Distancia mínima para considerar un swipe

    if (swipeDistance < -threshold) {
      // Swipe izquierda -> siguiente slide
      goToSlide(currentIndex + 1);
    } else if (swipeDistance > threshold) {
      // Swipe derecha -> slide anterior
      goToSlide(currentIndex - 1);
    }
  }

  // Pausar autoplay al hacer hover en el carrusel
  const carouselContainer = document.querySelector(".carousel-container");

  if (carouselContainer) {
    carouselContainer.addEventListener("mouseenter", () => {
      clearInterval(autoplayInterval);
    });

    carouselContainer.addEventListener("mouseleave", () => {
      startAutoplay();
    });
  }

  // Inicializar el carrusel
  updateSlideWidth();
  startAutoplay();
}
