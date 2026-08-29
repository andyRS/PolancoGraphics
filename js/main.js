(() => {
  "use strict";

  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");
  const menuLinks = menu ? [...menu.querySelectorAll("a")] : [];
  const year = document.querySelector("[data-year]");

  if (year) year.textContent = new Date().getFullYear();

  const updateHeader = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const closeMenu = () => {
    if (!menuToggle || !menu) return;
    menuToggle.classList.remove("is-active");
    menu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    document.body.classList.remove("menu-open");
  };

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      const willOpen = !menu.classList.contains("is-open");
      menuToggle.classList.toggle("is-active", willOpen);
      menu.classList.toggle("is-open", willOpen);
      menuToggle.setAttribute("aria-expanded", String(willOpen));
      menuToggle.setAttribute("aria-label", willOpen ? "Cerrar menú" : "Abrir menú");
      document.body.classList.toggle("menu-open", willOpen);
    });

    menuLinks.forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) closeMenu();
    });
  }

  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const projectCards = [...document.querySelectorAll("[data-category]")];

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;

      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      projectCards.forEach((card) => {
        const visible = selected === "all" || card.dataset.category === selected;
        card.classList.toggle("is-hidden", !visible);
      });
    });
  });

  const revealItems = [...document.querySelectorAll("[data-reveal]")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (revealItems.length && !reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("reveal-ready");

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const form = document.querySelector("#brief-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const value = (name) => String(data.get(name) || "").trim();
      const lines = [
        "Hola José, quiero conversar sobre un proyecto de diseño.",
        "",
        `Nombre: ${value("name")}`,
        value("company") ? `Empresa/equipo: ${value("company")}` : "",
        `Servicio: ${value("service")}`,
        `Objetivo o entregables: ${value("details")}`,
        value("deadline") ? `Fecha ideal: ${value("deadline")}` : "",
        value("budget") ? `Rango de inversión: ${value("budget")}` : "",
      ].filter(Boolean);

      const url = `https://wa.me/18492763532?text=${encodeURIComponent(lines.join("\n"))}`;
      const popup = window.open(url, "_blank", "noopener,noreferrer");

      if (!popup) window.location.href = url;
    });
  }
})();
