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
 * Inicializa la funcionalidad de navegación que cambia de estilo al hacer scroll
 */
function initNavMenu() {
  const navbar = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav a");
  const logo = document.querySelector(".logo");

  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;

    if (scroll > 100) {
      // Aplicar estilos cuando hay scroll
      navbar.classList.add("fixed");

      // Menú activo
      const menuItems = document.querySelectorAll(".nav-menu-item");
      menuItems.forEach((item) => {
        if (item.classList.contains("active")) {
          item.style.color = "#1ac2ea";
        }
      });
    } else {
      // Restaurar estilos iniciales
      navbar.classList.remove("fixed");
    }
  });

  // Añadir lógica para el menú móvil
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    // Crear backdrop para el menú móvil
    const backdrop = document.createElement("div");
    backdrop.classList.add("menu-backdrop");
    document.body.appendChild(backdrop);

    // Toggle para abrir/cerrar el menú móvil
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
      backdrop.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });

    // Cerrar menú al hacer clic en backdrop
    backdrop.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
      backdrop.classList.remove("active");
      document.body.classList.remove("menu-open");
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
        backdrop.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    });
  }
}

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
  content2.style.transition = "opacity 0.5s ease";

  function showPage(pageNum) {
    const fadeOutDuration = 300;
    const fadeInDuration = 500;

    if (pageNum === 1) {
      // Ocultar página 2 y mostrar página 1
      content2.style.opacity = "0";

      setTimeout(() => {
        content2.style.display = "none";
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
 */
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
