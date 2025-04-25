/**
 * Polanco Graphics - Script principal
 * Código JavaScript modernizado sin jQuery
 */

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar todas las funcionalidades
  initNavMenu();
  initMenuIndicator();
  initPagination();
  initAnimations();
});

/**
 * Inicializa el indicador de menú activo basado en la sección visible
 */
function initMenuIndicator() {
  const sections = document.querySelectorAll(".section");
  const menuItems = document.querySelectorAll(".nav-menu-item");

  // Configurar el Intersection Observer para detectar secciones visibles
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentId = entry.target.id;

        // Remover clase activa de todos los elementos
        menuItems.forEach((item) => item.classList.remove("active"));

        // Agregar clase activa al elemento de menú correspondiente
        const currentItem = Array.from(menuItems).find(
          (item) =>
            item.querySelector(".nav-menu-link").getAttribute("href") ===
              `#${currentId}` || item.getAttribute("data-url") === currentId
        );

        if (currentItem) {
          currentItem.classList.add("active");
        }
      }
    });
  }, observerOptions);

  // Observar todas las secciones
  sections.forEach((section) => {
    if (section.id) {
      observer.observe(section);
    }
  });
}

/**
 * Inicializa la funcionalidad de paginación para los proyectos
 */
function initPagination() {
  const nextButton = document.querySelector(".page-link-next");
  const content1 = document.getElementById("content");
  const content2 = document.getElementById("content-2");
  const pageLinks = document.querySelectorAll(".pagination .page-link");

  if (!nextButton || !content1 || !content2) return;

  // Configurar estilos iniciales para una mejor presentación
  content1.style.opacity = "1";
  content1.style.transition = "opacity 0.5s ease";
  content2.style.opacity = "0";
  content2.style.display = "none";
  content2.style.transition = "opacity 0.5s ease";

  function showPage(pageNum) {
    const fadeOutDuration = 300;
    const fadeInDuration = 500;

    if (pageNum === 1) {
      // Ocultar página 2 y mostrar página 1
      content2.style.opacity = "0";
      content2.style.display = "none";

      setTimeout(() => {
        content1.style.display = "block";
        setTimeout(() => {
          content1.style.opacity = "1";
        }, 50);
      }, fadeOutDuration);
    } else {
      // Ocultar página 1 y mostrar página 2
      content1.style.opacity = "0";

      setTimeout(() => {
        content1.style.display = "none";
        content2.style.display = "block";

        setTimeout(() => {
          content2.style.opacity = "1";
        }, 50);
      }, fadeOutDuration);
    }

    // Actualizar clases activas en la paginación
    pageLinks.forEach((link, i) => {
      if (i === pageNum - 1) {
        link.parentElement.classList.add("active");
      } else {
        link.parentElement.classList.remove("active");
      }
    });
  }

  // Evento para el botón "Next"
  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    showPage(2);
  });

  // Eventos para los números de página
  pageLinks.forEach((link, index) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showPage(index + 1);
    });
  });
}

/**
 * Inicializa animaciones para elementos al cargar la página y al hacer scroll
 *
 *
 */

function initNavMenu() {
  // Funcionalidad para el menú de navegación
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

function initAnimations() {
  // Detectar elementos para animar al hacer scroll
  const animatedElements = document.querySelectorAll(
    ".project, .diseño-grafico, .experienciaDiseño, .sobremi-minimal, .icon-message, .section-header"
  );

  // Configurar el observer para animaciones al hacer scroll
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  // Función para animar elementos cuando son visibles
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target); // Solo animar una vez
      }
    });
  }, observerOptions);

  // Añadir clase inicial a los elementos y observarlos
  animatedElements.forEach((el) => {
    el.classList.add("animate-element");
    observer.observe(el);
  });
}

/**
 * Mejoras de interactividad para la sección de servicios
 * Añade efectos hover avanzados, animaciones de entrada y filtrado de servicios
 */

document.addEventListener("DOMContentLoaded", () => {
  initServicesAnimations();
  initServiceCards();
});

/**
 * Inicializa las animaciones de entrada para los elementos de servicios
 */
function initServicesAnimations() {
  // Seleccionar elementos para animar
  const serviceCards = document.querySelectorAll(".service-card");
  const serviceItems = document.querySelectorAll(".service-item");

  // Configurar Observer para animaciones al hacer scroll
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  // Añadir clase inicial a los elementos
  serviceCards.forEach((card, index) => {
    card.classList.add("animate-element");
    // Añadir retraso escalonado a cada tarjeta
    card.style.transitionDelay = `${index * 100}ms`;
  });

  // Animar elementos de la lista de servicios con retraso
  serviceItems.forEach((item, index) => {
    item.classList.add("animate-element");
    item.style.transitionDelay = `${50 + index * 50}ms`;
  });

  // Función para animar elementos cuando son visibles
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observar todos los elementos animables
  serviceCards.forEach((card) => observer.observe(card));
  serviceItems.forEach((item) => observer.observe(item));
}

/**
 * Inicializa la funcionalidad interactiva de las tarjetas de servicio
 */
function initServiceCards() {
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach((card) => {
    // Efecto de elevación y rotación suave al pasar el mouse
    card.addEventListener("mouseenter", function () {
      const randomRotation = (Math.random() * 2 - 1) * 1; // Rotación aleatoria entre -1 y 1 grados
      this.style.transform = `translateY(-15px) rotate(${randomRotation}deg)`;
      this.style.boxShadow = "var(--shadow-lg)";

      // Animar el icono
      const icon = this.querySelector(".service-card-icon");
      if (icon) {
        icon.style.transform = "scale(1.1) rotate(5deg)";
        icon.style.backgroundColor = "var(--primary-color)";
        icon.style.color = "white";
      }

      // Resaltar el título
      const title = this.querySelector("h3");
      if (title) {
        title.style.color = "var(--primary-color)";
      }
    });

    // Restablecer estilos cuando el mouse sale
    card.addEventListener("mouseleave", function () {
      this.style.transform = "";
      this.style.boxShadow = "";

      // Restablecer el icono
      const icon = this.querySelector(".service-card-icon");
      if (icon) {
        icon.style.transform = "";
        icon.style.backgroundColor = "";
        icon.style.color = "";
      }

      // Restablecer el título
      const title = this.querySelector("h3");
      if (title) {
        title.style.color = "";
      }
    });

    // Efecto de clic
    card.addEventListener("mousedown", function () {
      this.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseup", function () {
      this.style.transform = "translateY(-15px)";
    });

    // Hacer que toda la tarjeta sea cliclable para ir al enlace
    card.addEventListener("click", function (e) {
      if (e.target.tagName !== "A") {
        const link = this.querySelector(".service-card-link");
        if (link) {
          e.preventDefault();
          link.click();
        }
      }
    });
  });

  // Hacer que las tarjetas sean más accesibles con teclado
  serviceCards.forEach((card) => {
    card.setAttribute("tabindex", "0");

    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const link = this.querySelector(".service-card-link");
        if (link) {
          link.click();
        }
      }
    });
  });
}

/**
 * Mejora la sección de servicios para dispositivos móviles
 * optimizando la interacción táctil y el rendimiento
 */
function enhanceMobileServices() {
  // Detectar si es un dispositivo móvil
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    const serviceCards = document.querySelectorAll(".service-card");

    // Optimizar efectos para pantallas táctiles
    serviceCards.forEach((card) => {
      // Eliminar efectos hover innecesarios en móvil
      card.classList.add("mobile-card");

      // Añadir efecto de toque
      card.addEventListener("touchstart", function () {
        this.classList.add("touch-active");
      });

      card.addEventListener("touchend", function () {
        this.classList.remove("touch-active");

        // Pequeña animación de rebote después del toque
        this.classList.add("touch-bounce");
        setTimeout(() => {
          this.classList.remove("touch-bounce");
        }, 300);
      });
    });
  }
}

// Inicializar mejoras para móvil y recalcular en redimensión
window.addEventListener("load", enhanceMobileServices);
window.addEventListener("resize", enhanceMobileServices);

/**
 * Script para animaciones avanzadas en la sección de filosofía de diseño
 */
document.addEventListener("DOMContentLoaded", function () {
  initPhilosophyAnimations();
});

function initPhilosophyAnimations() {
  // Elementos visuales para animar
  const philosophySection = document.getElementById("design-philosophy");
  const designElements = document.querySelectorAll(".design-element");
  const principleItems = document.querySelectorAll(".principle-item");
  const logoElement = document.querySelector(".animated-logo");

  if (!philosophySection) return;

  // Animar los elementos de diseño con posiciones aleatorias
  designElements.forEach((element) => {
    // Configurar animación única para cada elemento
    const randomDuration = 15 + Math.random() * 10; // Entre 15 y 25 segundos
    const randomDelay = Math.random() * 5; // Retraso entre 0 y 5 segundos

    // Aplicar estilos CSS personalizados
    element.style.animation = `moveSlow ${randomDuration}s linear infinite`;
    element.style.animationDelay = `${randomDelay}s`;

    // Alternar dirección
    if (Math.random() > 0.5) {
      element.style.animationDirection = "reverse";
    }
  });

  // Animación para el logo
  if (logoElement) {
    // Parallax sutil al mover el ratón
    philosophySection.addEventListener("mousemove", (e) => {
      // Solo ejecutar en pantallas grandes (no móviles)
      if (window.innerWidth > 992) {
        const { left, top, width, height } =
          philosophySection.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Calcular distancia desde el centro (en porcentaje)
        const moveX = ((e.clientX - centerX) / width) * 15; // Movimiento máximo de 15px
        const moveY = ((e.clientY - centerY) / height) * 15;

        // Aplicar transformación suave al logo
        logoElement.style.transform = `translate(${moveX}px, ${moveY}px)`;

        // Mover elementos de diseño en dirección opuesta para efecto parallax
        designElements.forEach((element, index) => {
          const factor = 0.5 + index * 0.2; // Factor diferente para cada elemento
          element.style.transform = `translate(${-moveX * factor}px, ${
            -moveY * factor
          }px)`;
        });
      }
    });

    // Restaurar posición al salir
    philosophySection.addEventListener("mouseleave", () => {
      logoElement.style.transform = "";
      designElements.forEach((element) => {
        element.style.transform = "";
      });
    });
  }

  // Animación secuencial para los principios
  if (principleItems.length) {
    // Detector de intersección para animar cuando sea visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Añadir clase para animar secuencialmente
          principleItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("principle-animate");
            }, 200 * index); // 200ms de retraso entre cada principio
          });

          // Desconectar después de animar
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    // Observar la sección
    observer.observe(philosophySection);
  }

  // Añadir efecto de brillo al icono al hacer hover
  principleItems.forEach((item) => {
    const icon = item.querySelector(".principle-icon");

    item.addEventListener("mouseenter", () => {
      if (icon) {
        // Añadir brillo
        icon.style.boxShadow = "0 0 15px rgba(26, 154, 175, 0.5)";
      }
    });

    item.addEventListener("mouseleave", () => {
      if (icon) {
        // Quitar brillo
        icon.style.boxShadow = "";
      }
    });
  });

  // Añadir estilos CSS para la animación de los principios
  const styleElement = document.createElement("style");
  styleElement.textContent = `
    .principle-animate .principle-icon {
      animation: pulseIcon 0.5s ease forwards;
    }
    
    @keyframes pulseIcon {
      0% {
        transform: scale(0);
        opacity: 0;
      }
      70% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(styleElement);
}

/**
 * Script para el slider de testimonios en la sección de experiencia
 */
document.addEventListener("DOMContentLoaded", function () {
  initTestimonialsSlider();
});

function initTestimonialsSlider() {
  // Datos de los testimonios
  const testimonials = [
    {
      content:
        "José Miguel transformó por completo nuestra marca con un diseño que comunica perfectamente nuestra esencia. Su capacidad para entender nuestras necesidades y convertirlas en soluciones visuales es extraordinaria.",
      author: "Carlos Rodríguez",
      position: "CEO, Innovatech Solutions",
    },
    {
      content:
        "Trabajar con Polanco Graphics ha sido una experiencia excepcional. Su enfoque profesional y su visión creativa llevaron nuestra identidad visual a un nivel completamente nuevo, superando todas nuestras expectativas.",
      author: "María Fernández",
      position: "Directora de Marketing, GrupoExcel",
    },
    {
      content:
        "El trabajo de José Miguel en el rediseño de nuestra marca fue clave para el relanzamiento exitoso de nuestro negocio. Su atención al detalle y comprensión de nuestros valores como empresa hicieron toda la diferencia.",
      author: "Antonio Mejía",
      position: "Fundador, Organics Store",
    },
  ];

  // Elementos del DOM
  const testimonialsContainer = document.querySelector(".testimonial-item");
  const prevButton = document.querySelector(".testimonial-prev");
  const nextButton = document.querySelector(".testimonial-next");
  const indicators = document.querySelectorAll(
    ".testimonial-indicators .indicator"
  );

  // Si no existe el slider, salir de la función
  if (!testimonialsContainer || !prevButton || !nextButton) return;

  let currentIndex = 0;

  // Función para mostrar un testimonio específico
  function showTestimonial(index) {
    // Actualizar el índice actual
    currentIndex = index;

    // Actualizar el contenido del testimonio
    const testimonial = testimonials[index];

    // Crear el HTML del testimonio
    const testimonialHTML = `
      <div class="testimonial-content">
        <p>${testimonial.content}</p>
      </div>
      <div class="testimonial-author">
        <div class="author-avatar">
          <i class="fas fa-user-circle"></i>
        </div>
        <div class="author-info">
          <h4>${testimonial.author}</h4>
          <p>${testimonial.position}</p>
        </div>
      </div>
    `;

    // Aplicar la animación de desvanecimiento
    testimonialsContainer.style.opacity = "0";

    setTimeout(() => {
      // Actualizar el contenido
      testimonialsContainer.innerHTML = testimonialHTML;

      // Mostrar con animación
      testimonialsContainer.style.opacity = "1";

      // Actualizar indicadores
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === index);
      });
    }, 300);
  }

  // Event listeners para botones de navegación
  nextButton.addEventListener("click", () => {
    let newIndex = currentIndex + 1;
    if (newIndex >= testimonials.length) newIndex = 0;
    showTestimonial(newIndex);
  });

  prevButton.addEventListener("click", () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = testimonials.length - 1;
    showTestimonial(newIndex);
  });

  // Event listeners para indicadores
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      showTestimonial(index);
    });
  });

  // Iniciar rotación automática
  let autoplayInterval;

  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      let newIndex = currentIndex + 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      showTestimonial(newIndex);
    }, 5000); // Cambiar cada 5 segundos
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // Pausar rotación al hacer hover
  testimonialsContainer.addEventListener("mouseenter", stopAutoplay);
  testimonialsContainer.addEventListener("mouseleave", startAutoplay);

  // Iniciar el slider
  startAutoplay();

  // Añadir transición CSS para suavizar los cambios
  testimonialsContainer.style.transition = "opacity 0.3s ease";
}

/**
 * Script para animar las barras de experiencia
 */
document.addEventListener("DOMContentLoaded", function () {
  // Detectar cuando la sección de experiencia está visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target;

          // Añadir la clase para animar las barras
          container.classList.add("animate-bars");

          // Establecer el ancho para cada barra basado en su atributo style
          const bars = container.querySelectorAll(".expertise-level");
          bars.forEach((bar) => {
            const width = bar.style.width;
            bar.style.setProperty("--width", width);
          });

          // Desconectar el observer después de la animación
          observer.unobserve(container);
        }
      });
    },
    { threshold: 0.3 }
  );

  // Observar la sección de experiencia
  const expertiseSection = document.querySelector(".expertise-areas");
  if (expertiseSection) {
    observer.observe(expertiseSection);
  }
});
