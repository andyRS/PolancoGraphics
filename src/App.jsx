import { useEffect, useRef, useState } from "react";
import portrait from "../imagenes/jose-miguel-mendez.jpeg";
import brandLogo from "../imagenes/favicon.png";
const projectImages = import.meta.glob("../imagenes/fotos-projects/p-*.jpg", { eager: true, import: "default" });
const projectImage = (filename) => projectImages[`../imagenes/fotos-projects/${filename}`];

const workCases = [
  {
    number: "01",
    client: "HPC Consulting Group",
    category: "Identidad corporativa y aplicaciones",
    summary: "Una identidad visual aplicada de manera coherente a entornos digitales, uniformes, papelería, promoción y espacios comerciales.",
    services: ["Identidad", "Aplicaciones digitales", "Papelería", "Publicidad exterior"],
    images: [
      { image: projectImage("p-2.jpg"), label: "Marca principal", alt: "Logotipo principal de HPC Consulting Group" },
      { image: projectImage("p-14.jpg"), label: "Variante cromática", alt: "Variante cromática del logotipo de HPC Consulting Group" },
      { image: projectImage("p-27.jpg"), label: "Versión sobre color", alt: "Logotipo de HPC Consulting Group aplicado sobre fondo azul" },
      { image: projectImage("p-4.jpg"), label: "Aplicación móvil", alt: "Aplicación móvil de la identidad HPC Consulting Group" },
      { image: projectImage("p-7.jpg"), label: "Uniforme corporativo", alt: "Identidad de HPC Consulting Group aplicada en uniforme corporativo" },
      { image: projectImage("p-15.jpg"), label: "Publicidad exterior", alt: "Publicidad exterior de HPC Consulting Group en mobiliario urbano" },
      { image: projectImage("p-20.jpg"), label: "Fachada corporativa", alt: "Logotipo de HPC Consulting Group aplicado en fachada corporativa" },
      { image: projectImage("p-21.jpg"), label: "Producto promocional", alt: "Logotipo de HPC Consulting Group aplicado en una taza corporativa" },
      { image: projectImage("p-25.jpg"), label: "Tarjeta corporativa", alt: "Tarjeta de presentación diseñada para HPC Consulting Group" },
    ],
  },
  {
    number: "02",
    client: "Shutters Geraldino",
    category: "Identidad comercial e implementación",
    summary: "Un sistema reconocible llevado desde el símbolo de marca hasta aplicaciones digitales, vehículos, fachada, papelería y uniforme.",
    services: ["Identidad", "Sistema cromático", "Rotulación", "Implementación"],
    images: [
      { image: projectImage("p-5.jpg"), label: "Símbolo de marca", alt: "Símbolo gráfico de Shutters Geraldino" },
      { image: projectImage("p-16.jpg"), label: "Marca principal", alt: "Logotipo principal de Shutters Geraldino" },
      { image: projectImage("p-19.jpg"), label: "Versión horizontal", alt: "Versión horizontal del logotipo de Shutters Geraldino" },
      { image: projectImage("p-17.jpg"), label: "Sistema cromático", alt: "Presentación cromática de la identidad Shutters Geraldino" },
      { image: projectImage("p-3.jpg"), label: "Aplicación móvil", alt: "Identidad Shutters Geraldino aplicada en un dispositivo móvil" },
      { image: projectImage("p-23.jpg"), label: "Aplicación impresa", alt: "Logotipo de Shutters Geraldino aplicado sobre material impreso" },
      { image: projectImage("p-13.jpg"), label: "Rotulación posterior", alt: "Rotulación posterior de vehículo para Shutters Geraldino" },
      { image: projectImage("p-24.jpg"), label: "Rotulación vehicular", alt: "Rotulación lateral de vehículo comercial para Shutters Geraldino" },
      { image: projectImage("p-18.jpg"), label: "Fachada comercial", alt: "Logotipo de Shutters Geraldino instalado en fachada comercial" },
      { image: projectImage("p-28.jpg"), label: "Uniforme corporativo", alt: "Marca Shutters Geraldino aplicada en uniforme corporativo" },
      { image: projectImage("p-29.jpg"), label: "Tarjeta corporativa", alt: "Tarjeta de presentación diseñada para Shutters Geraldino" },
    ],
  },
  {
    number: "03",
    client: "My Vet Veterinaria",
    category: "Identidad de marca y comunicación",
    summary: "Una identidad cercana y flexible desplegada en variantes de marca, papelería, uniforme clínico, experiencia digital y publicidad exterior.",
    services: ["Identidad", "Papelería", "Aplicación digital", "Publicidad exterior"],
    images: [
      { image: projectImage("p-6.jpg"), label: "Marca sobre color", alt: "Logotipo de My Vet Veterinaria aplicado sobre color verde" },
      { image: projectImage("p-11.jpg"), label: "Variante cromática", alt: "Variante cromática del logotipo de My Vet Veterinaria" },
      { image: projectImage("p-22.jpg"), label: "Marca principal", alt: "Logotipo principal de My Vet Veterinaria" },
      { image: projectImage("p-1.jpg"), label: "Tarjetas corporativas", alt: "Tarjetas corporativas de My Vet Veterinaria" },
      { image: projectImage("p-12.jpg"), label: "Papelería", alt: "Papelería corporativa diseñada para My Vet Veterinaria" },
      { image: projectImage("p-8.jpg"), label: "Uniforme clínico", alt: "Identidad de My Vet Veterinaria aplicada en uniforme clínico" },
      { image: projectImage("p-9.jpg"), label: "Aplicación móvil", alt: "Identidad de My Vet Veterinaria aplicada en un dispositivo móvil" },
      { image: projectImage("p-26.jpg"), label: "Publicidad exterior", alt: "Publicidad exterior de My Vet Veterinaria" },
    ],
  },
  {
    number: "04",
    client: "Aplicación institucional",
    category: "Diseño gráfico aplicado",
    summary: "Una pieza gráfica adaptada a un soporte físico, cuidando composición, escala y legibilidad en el objeto final.",
    services: ["Composición", "Aplicación gráfica", "Preparación visual"],
    images: [
      { image: projectImage("p-10.jpg"), label: "Aplicación institucional", alt: "Diseño institucional aplicado sobre una pieza de mesa" },
    ],
  },
];

const services = [
  {
    id: "01",
    title: "Identidad visual",
    description: "Construcción o evolución de marcas con una presencia coherente, reconocible y preparada para crecer.",
    items: ["Diseño o rediseño de logotipo", "Sistema visual", "Paleta y tipografía", "Manual de identidad"],
    result: "Una marca con criterio, consistencia y personalidad propia.",
  },
  {
    id: "02",
    title: "Diseño publicitario",
    description: "Conceptos y piezas visuales creadas para captar atención y comunicar una oferta con claridad.",
    items: ["Campañas gráficas", "Flyers y carteles", "Anuncios digitales", "Adaptaciones de formatos"],
    result: "Comunicación visual con más impacto y mejor recordación.",
  },
  {
    id: "03",
    title: "Contenido para redes",
    description: "Sistemas de contenido que permiten publicar con velocidad sin perder la identidad de la marca.",
    items: ["Publicaciones e historias", "Carruseles", "Banners y portadas", "Plantillas editables"],
    result: "Una presencia digital consistente, profesional y fácil de mantener.",
  },
  {
    id: "04",
    title: "Editorial y presentaciones",
    description: "Información compleja convertida en una experiencia clara, ordenada y visualmente atractiva.",
    items: ["Catálogos y folletos", "Dosieres", "Presentaciones comerciales", "Informes y publicaciones"],
    result: "Documentos que explican mejor y elevan la percepción del negocio.",
  },
  {
    id: "05",
    title: "Packaging y papelería",
    description: "Aplicaciones que trasladan el valor de la marca a productos, empaques y materiales corporativos.",
    items: ["Etiquetas y empaques", "Tarjetas de visita", "Papelería corporativa", "Material para punto de venta"],
    result: "Una experiencia de marca consistente en cada punto de contacto.",
  },
  {
    id: "06",
    title: "Rotulación y gran formato",
    description: "Diseño comercial preparado para espacios físicos, vehículos y producción a gran escala.",
    items: ["Rotulación vehicular", "Fachadas y escaparates", "Vinilos y señalización", "Stands y exhibidores"],
    result: "Visibilidad profesional dentro y fuera del espacio comercial.",
  },
];

function Arrow({ className = "" }) {
  return <span className={`inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${className}`} aria-hidden="true">↗</span>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-white/10 bg-neutral-950/80 py-3 backdrop-blur-xl" : "py-5"}`}>
      <div className="mx-auto flex w-[min(92vw,1500px)] items-center justify-between">
        <a href="#top" onClick={close} className="group flex items-center gap-3" aria-label="Inicio">
          <span className="grid size-11 place-items-center rounded-full bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)] transition-transform duration-500 group-hover:rotate-12">
            <img src={brandLogo} alt="" className="size-7 object-contain" />
          </span>
          <span className="leading-none">
            <strong className="block text-[12px] font-semibold tracking-[-0.02em] text-white">José Miguel Méndez</strong>
            <small className="mt-1 block text-[8px] font-bold uppercase tracking-[0.18em] text-white/40">Diseñador visual · RD</small>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-[10px] font-bold uppercase tracking-[0.12em] text-white/70 lg:flex" aria-label="Principal">
          <a className="nav-link" href="#work">Proyectos</a>
          <a className="nav-link" href="#services">Servicios</a>
          <a className="nav-link" href="#about">Perfil</a>
          <a className="group rounded-full border border-white/20 px-5 py-3 text-white transition hover:border-acid hover:bg-acid hover:text-black" href="#contact">Iniciar proyecto <Arrow /></a>
        </nav>

        <button type="button" className="relative z-50 grid size-11 place-items-center rounded-full border border-white/20 lg:hidden" aria-expanded={open} aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen((value) => !value)}>
          <span className={`absolute h-px w-4 bg-white transition ${open ? "rotate-45" : "-translate-y-1"}`} />
          <span className={`absolute h-px w-4 bg-white transition ${open ? "-rotate-45" : "translate-y-1"}`} />
        </button>
      </div>

      <div className={`fixed inset-0 z-40 flex flex-col justify-end bg-acid px-[6vw] pb-14 text-black transition-all duration-500 lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div className="mb-auto mt-6 text-[10px] font-black uppercase tracking-[0.2em]">Menú / 2026</div>
        {[["work", "proyectos"], ["services", "servicios"], ["about", "perfil"], ["contact", "contacto"]].map(([item, label], index) => (
          <a key={item} href={`#${item}`} onClick={close} className="border-t border-black/20 py-3 font-display text-[clamp(3.2rem,15vw,6rem)] leading-[0.9] tracking-[-0.07em] capitalize">{String(index + 1).padStart(2, "0")} {label}</a>
        ))}
      </div>
    </header>
  );
}

function Hero() {
  const cardRef = useRef(null);

  const onPointerMove = (event) => {
    if (!cardRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.setProperty("--move-x", `${x * 18}px`);
    cardRef.current.style.setProperty("--move-y", `${y * 18}px`);
    cardRef.current.style.setProperty("--rotate-y", `${x * 5}deg`);
    cardRef.current.style.setProperty("--rotate-x", `${y * -5}deg`);
  };

  const reset = () => {
    if (!cardRef.current) return;
    ["--move-x", "--move-y", "--rotate-x", "--rotate-y"].forEach((name) => cardRef.current.style.removeProperty(name));
  };

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      <div className="hero-grid-lines absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-screen w-[min(92vw,1500px)] flex-col justify-end pb-12 pt-32 lg:pb-16">
        <div className="mb-8 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.18em] text-white/45" data-reveal>
          <span>Diseñador independiente / Dirección visual</span>
          <span className="hidden sm:block">Disponible para proyectos seleccionados</span>
        </div>

        <div className="relative grid items-end gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="relative z-10" data-reveal>
            <p className="mb-4 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.24em] text-acid"><span className="size-2 animate-pulse rounded-full bg-acid" /> Diseñador gráfico senior</p>
            <h1 className="hero-title font-display text-[clamp(4.7rem,11.8vw,12.4rem)] font-medium leading-[0.73] tracking-[-0.085em]">
              Impacto
              <span className="ml-[0.14em] inline-block font-display font-medium not-italic tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.55)]">visual</span>
              <br />por diseño<span className="text-acid">.</span>
            </h1>
            <div className="mt-8 grid max-w-3xl gap-7 border-t border-white/15 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-xl text-[clamp(1rem,1.5vw,1.3rem)] leading-relaxed text-white/60">Identidades, campañas y sistemas visuales creados para hacer que una marca se vea más clara, deseable y difícil de ignorar.</p>
              <a href="#services" className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.16em] text-white"><span className="grid size-12 place-items-center rounded-full bg-white text-lg text-black transition duration-300 group-hover:rotate-45 group-hover:bg-acid">↓</span> Ver servicios</a>
            </div>
          </div>

          <div ref={cardRef} onPointerMove={onPointerMove} onPointerLeave={reset} className="portrait-stage relative mx-auto w-full max-w-[31rem] lg:absolute lg:bottom-0 lg:right-0 lg:h-[76vh] lg:max-h-[800px]" data-reveal>
            <div className="absolute -inset-5 rounded-[3rem] border border-acid/30" />
            <div className="portrait-glow absolute -inset-10 rounded-full bg-acid/20 blur-[80px]" />
            <div className="portrait-hero relative h-[34rem] overflow-hidden rounded-[2.2rem] border border-white/15 bg-neutral-900 lg:h-full">
              <img src={portrait} alt="José Miguel Méndez, diseñador gráfico" className="h-full w-full object-cover object-[center_24%] saturate-[0.75]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-[9px] font-bold uppercase tracking-[0.14em]">
                <span>José Miguel<br />Méndez Polanco</span><span className="text-right text-white/45">Dirección creativa<br />y ejecución</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Identidad de marca", "Campañas", "Editorial", "Contenido digital", "Dirección de arte", "Producción"];
  return (
    <div className="overflow-hidden border-y border-black bg-acid py-4 text-black" aria-hidden="true">
      <div className="marquee flex w-max items-center gap-8 whitespace-nowrap">
        {[...items, ...items].map((item, index) => <span key={`${item}-${index}`} className="flex items-center gap-8 font-display text-xl font-semibold uppercase tracking-[-0.04em] sm:text-3xl"><span>{item}</span><i className="text-base not-italic">✦</i></span>)}
      </div>
    </div>
  );
}

function WorkCase({ project }) {
  return (
    <article className="case-study">
      <div className="case-intro grid gap-7 lg:grid-cols-[0.2fr_0.8fr] lg:gap-12">
        <div className="flex items-start justify-between lg:block"><span className="text-[10px] font-black uppercase tracking-[0.18em] text-black/40">Caso / {project.number}</span><span className="rounded-full bg-black px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.16em] text-white lg:mt-5 lg:inline-block">Trabajo realizado</span></div>
        <div className="grid gap-7 xl:grid-cols-[1fr_0.65fr] xl:items-end">
          <div><p className="mb-3 text-[9px] font-black uppercase tracking-[0.16em] text-violet">{project.category}</p><h3 className="max-w-4xl font-display text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.86] tracking-[-0.075em]">{project.client}</h3></div>
          <div><p className="max-w-lg text-sm leading-relaxed text-black/55">{project.summary}</p><div className="mt-5 flex flex-wrap gap-2">{project.services.map((service) => <span key={service} className="rounded-full border border-black/20 px-3 py-2 text-[8px] font-black uppercase tracking-[0.12em]">{service}</span>)}</div></div>
        </div>
      </div>

      <div className="case-gallery mt-10">
        {project.images.map((item) => (
          <figure key={item.label} className="case-shot group">
            <img src={item.image} alt={item.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-70" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white"><span className="text-[9px] font-black uppercase tracking-[0.16em]">{item.label}</span><span className="grid size-9 place-items-center rounded-full border border-white/30 bg-black/15 text-sm backdrop-blur-md">↗</span></figcaption>
          </figure>
        ))}
      </div>
    </article>
  );
}

function SelectedWork() {
  const [currentPage, setCurrentPage] = useState(0);
  const currentProject = workCases[currentPage];

  const showPage = (page) => {
    if (page < 0 || page >= workCases.length || page === currentPage) return;
    setCurrentPage(page);
    requestAnimationFrame(() => document.getElementById("work-case")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  return (
    <section id="work" className="bg-[#f1f0ea] py-24 text-black sm:py-32 lg:py-40">
      <div className="mx-auto w-[min(92vw,1500px)]">
        <div className="mb-20 grid gap-8 border-t border-black/25 pt-6 lg:grid-cols-[0.35fr_1fr] lg:items-end lg:gap-16">
          <p className="text-[10px] font-black uppercase tracking-[0.18em]">02 / Trabajos realizados</p>
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"><div><h2 className="max-w-5xl font-display text-[clamp(3.7rem,8vw,8rem)] font-semibold leading-[0.82] tracking-[-0.075em]">Marcas llevadas<br /><span className="font-display font-semibold not-italic text-violet">a la vida.</span></h2><div className="mt-7 flex gap-8 border-t border-black/15 pt-5"><p><strong className="font-display text-3xl">04</strong><span className="ml-2 text-[9px] font-black uppercase tracking-[0.14em] text-black/45">Proyectos</span></p><p><strong className="font-display text-3xl">29</strong><span className="ml-2 text-[9px] font-black uppercase tracking-[0.14em] text-black/45">Aplicaciones</span></p></div></div><p className="max-w-sm text-sm leading-relaxed text-black/55">Todo el archivo disponible, organizado por proyecto: identidad, papelería, rotulación, uniformes, entornos digitales y publicidad exterior.</p></div>
        </div>

        <div id="work-case" key={currentProject.number} className="case-page scroll-mt-24" aria-live="polite">
          <WorkCase project={currentProject} />
        </div>

        <nav className="mt-14 border-y border-black/20 py-5" aria-label="Paginación de trabajos realizados">
          <div className="flex items-center justify-between gap-3">
            <button type="button" onClick={() => showPage(currentPage - 1)} disabled={currentPage === 0} className="group flex min-w-11 items-center gap-3 text-[9px] font-black uppercase tracking-[0.14em] disabled:cursor-not-allowed disabled:opacity-25"><span className="grid size-11 place-items-center rounded-full border border-black/25 transition group-hover:bg-black group-hover:text-white">←</span><span className="hidden sm:inline">Anterior</span></button>
            <div className="flex items-center gap-2">
              {workCases.map((project, index) => (
                <button key={project.number} type="button" onClick={() => showPage(index)} aria-label={`Ver proyecto ${project.client}`} aria-current={index === currentPage ? "page" : undefined} className={`group flex h-11 items-center gap-2 rounded-full px-4 text-[9px] font-black uppercase tracking-[0.12em] transition ${index === currentPage ? "bg-black text-white" : "border border-black/20 hover:border-black"}`}><span>{project.number}</span><span className={`hidden xl:inline ${index === currentPage ? "text-acid" : "text-black/45"}`}>{project.client}</span></button>
              ))}
            </div>
            <button type="button" onClick={() => showPage(currentPage + 1)} disabled={currentPage === workCases.length - 1} className="group flex min-w-11 items-center justify-end gap-3 text-[9px] font-black uppercase tracking-[0.14em] disabled:cursor-not-allowed disabled:opacity-25"><span className="hidden sm:inline">Siguiente</span><span className="grid size-11 place-items-center rounded-full border border-black/25 transition group-hover:bg-black group-hover:text-white">→</span></button>
          </div>
          <div className="mt-4 flex items-center justify-between text-[8px] font-black uppercase tracking-[0.16em] text-black/35"><span>Página {currentPage + 1} de {workCases.length}</span><span>{currentProject.images.length} {currentProject.images.length === 1 ? "pieza" : "piezas"} en este proyecto</span></div>
        </nav>

        <div className="mt-24 flex flex-col items-start justify-between gap-7 rounded-[2rem] bg-violet p-7 text-white sm:flex-row sm:items-center sm:p-10">
          <div><p className="text-[9px] font-black uppercase tracking-[0.18em] text-acid">Tu marca puede ser la próxima</p><h3 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl">De la identidad a cada punto de contacto.</h3></div>
          <a href="#contact" className="group shrink-0 rounded-full bg-acid px-6 py-4 text-[9px] font-black uppercase tracking-[0.15em] text-black">Desarrollar mi marca <Arrow /></a>
        </div>
      </div>
    </section>
  );
}

function Services({ onSelect }) {
  return (
    <section id="services" className="relative overflow-hidden bg-[#f1f0ea] py-24 text-black sm:py-32 lg:py-40">
      <div className="services-orbit absolute -right-40 top-20 size-[34rem] rounded-full border border-black/10" aria-hidden="true" />
      <div className="relative mx-auto w-[min(92vw,1500px)]">
        <div className="mb-12 grid gap-8 border-t border-black/25 pt-6 lg:grid-cols-[0.35fr_1fr] lg:gap-16">
          <p className="text-[10px] font-black uppercase tracking-[0.18em]">01 / Servicios profesionales</p>
          <div className="grid gap-7 xl:grid-cols-[1fr_0.42fr] xl:items-end">
            <h2 className="max-w-5xl font-display text-[clamp(3.7rem,8vw,8rem)] font-semibold leading-[0.82] tracking-[-0.075em]">Diseño que trabaja<br /><span className="font-display font-semibold not-italic text-violet">para el negocio.</span></h2>
            <p className="max-w-md text-sm leading-relaxed text-black/55">Servicios de diseño gráfico con alcance definido, proceso claro y entregables preparados para publicar, presentar o producir.</p>
          </div>
        </div>

        <div className="mb-12 flex flex-wrap gap-2">
          {["Cotización por proyecto", "Trabajo remoto", "Archivos organizados", "Listo para producción"].map((item) => <span key={item} className="rounded-full border border-black/20 px-4 py-2 text-[9px] font-black uppercase tracking-[0.14em]">{item}</span>)}
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.id} className="service-card group">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-[0.18em]">Servicio / {service.id}</span>
                <span className="grid size-10 place-items-center rounded-full border border-current/20 text-base transition duration-300 group-hover:rotate-45 group-hover:bg-black group-hover:text-white">↗</span>
              </div>
              <h3 className="mt-10 max-w-[11ch] font-display text-[clamp(2.4rem,4vw,4.5rem)] font-semibold leading-[0.9] tracking-[-0.07em]">{service.title}</h3>
              <p className="mt-6 max-w-xl text-sm leading-relaxed opacity-60">{service.description}</p>
              <div className="mt-9 border-t border-current/20 pt-5">
                <span className="text-[8px] font-black uppercase tracking-[0.18em] opacity-45">Incluye</span>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {service.items.map((item) => <li key={item} className="flex items-start gap-2 text-[11px] font-semibold"><span className="mt-0.5">✦</span>{item}</li>)}
                </ul>
              </div>
              <div className="mt-auto pt-10">
                <p className="border-t border-current/20 pt-5 font-display text-[clamp(1.1rem,1.8vw,1.55rem)] font-semibold not-italic leading-snug tracking-[-0.035em] opacity-75">{service.result}</p>
                <a href="#contact" onClick={() => onSelect(service.title)} className="mt-6 inline-flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.16em]"><span className="border-b border-current pb-1">Solicitar este servicio</span><Arrow /></a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 rounded-[2rem] bg-black p-7 text-white sm:p-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">
          <div><span className="text-[9px] font-black uppercase tracking-[0.18em] text-acid">Modalidades de colaboración</span><h3 className="mt-4 font-display text-4xl font-semibold leading-none tracking-[-0.06em]">Una forma de trabajo para cada necesidad.</h3></div>
          <div className="grid gap-px overflow-hidden rounded-xl bg-white/15 sm:grid-cols-3">
            {[["Proyecto definido", "Una necesidad, alcance y fecha de entrega."], ["Producción mensual", "Un volumen recurrente de piezas y formatos."], ["Apoyo a agencias", "Capacidad senior integrada a un equipo existente."]].map(([title, copy]) => <div key={title} className="bg-neutral-950 p-5"><strong className="text-sm">{title}</strong><p className="mt-2 text-[11px] leading-relaxed text-white/45">{copy}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="overflow-hidden bg-[#0a0a0a] py-24 text-white sm:py-32 lg:py-40">
      <div className="mx-auto w-[min(92vw,1500px)]">
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <div className="relative" data-reveal>
            <div className="about-photo relative mx-auto max-w-[34rem] overflow-hidden rounded-[2rem]">
              <img src={portrait} alt="Retrato profesional de José Miguel Méndez" loading="lazy" className="aspect-[0.78] w-full object-cover object-[center_22%] grayscale" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-6 left-6 text-[9px] font-black uppercase tracking-[0.18em] text-acid">Diseñador / Estratega / Creador</span>
            </div>
            <div className="absolute -bottom-7 -right-3 grid size-28 place-items-center rounded-full bg-acid text-center text-[9px] font-black uppercase leading-tight tracking-[0.12em] text-black sm:-right-8 sm:size-36">Disponible<br />para proyectos<br />seleccionados</div>
          </div>

          <div className="flex flex-col justify-between" data-reveal>
            <div>
              <p className="mb-10 text-[10px] font-black uppercase tracking-[0.18em] text-acid">03 / El diseñador</p>
              <h2 className="font-display text-[clamp(3.3rem,7vw,7.5rem)] font-semibold leading-[0.85] tracking-[-0.075em]">El oficio primero.<br /><span className="font-display font-semibold not-italic text-white/35">El ego después.</span></h2>
              <p className="mt-10 max-w-3xl font-display text-[clamp(1.55rem,2.8vw,3rem)] font-medium leading-[1.18] tracking-[-0.035em] text-white/85">Soy José Miguel Méndez. Diseño para que las marcas sean entendidas, reconocidas y elegidas.</p>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/45">Mi trabajo combina concepto, tipografía, composición y ejecución. Puedo construir una dirección desde cero o integrarme a un sistema existente y elevarlo con consistencia, velocidad y atención al detalle.</p>
            </div>
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-3">
              {[["Ubicación", "República Dominicana"], ["Modalidad", "Remoto / Global"], ["Especialidad", "Marca y campañas"]].map(([label,value]) => <div key={label} className="bg-neutral-950 p-5"><span className="block text-[8px] font-black uppercase tracking-[0.18em] text-white/35">{label}</span><strong className="mt-2 block text-sm font-semibold">{value}</strong></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["01", "Descubrir", "Entender el negocio, la audiencia y lo que realmente debe resolver el diseño."],
    ["02", "Dirigir", "Definir una dirección visual clara antes de multiplicar piezas y formatos."],
    ["03", "Diseñar", "Construir, revisar y refinar con atención obsesiva a cada decisión."],
    ["04", "Entregar", "Entregar un sistema organizado, listo para publicar, producir y crecer."],
  ];
  return (
    <section className="bg-[#f1f0ea] py-24 text-black sm:py-32 lg:py-40">
      <div className="mx-auto w-[min(92vw,1500px)]">
        <div className="mb-16 grid gap-8 border-t border-black/25 pt-6 lg:grid-cols-[0.35fr_1fr] lg:gap-16" data-reveal>
          <p className="text-[10px] font-black uppercase tracking-[0.18em]">04 / Proceso</p>
          <h2 className="max-w-5xl font-display text-[clamp(3.7rem,8vw,8rem)] font-semibold leading-[0.82] tracking-[-0.075em]">Sin misterio.<br /><span className="font-display font-semibold not-italic text-black/35">Solo método.</span></h2>
        </div>
        <ol className="grid border-l border-t border-black/20 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([id,title,copy]) => <li key={id} className="group flex min-h-[20rem] flex-col border-b border-r border-black/20 p-6 transition duration-500 hover:bg-acid sm:min-h-[25rem]" data-reveal><span className="text-[9px] font-black">/{id}</span><div className="mt-auto"><h3 className="font-display text-4xl font-semibold tracking-[-0.06em]">{title}</h3><p className="mt-4 max-w-[17rem] text-sm leading-relaxed text-black/50 transition group-hover:text-black/70">{copy}</p></div></li>)}
        </ol>
      </div>
    </section>
  );
}

function Contact({ selectedService, onServiceChange }) {
  const submit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "Hola José, quiero conversar sobre un proyecto de diseño.",
      "",
      `Nombre: ${data.get("name")}`,
      data.get("company") ? `Empresa/equipo: ${data.get("company")}` : "",
      `Proyecto: ${data.get("service")}`,
      `Necesidad: ${data.get("message")}`,
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/18492763532?text=${encodeURIComponent(lines)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-acid py-24 text-black sm:py-32 lg:py-40">
      <div className="contact-word absolute -bottom-[0.18em] -left-[0.03em] select-none font-display text-[28vw] font-black leading-none tracking-[-0.1em] text-black/[0.045]" aria-hidden="true">HOLA</div>
      <div className="relative mx-auto w-[min(92vw,1500px)]">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div data-reveal>
            <p className="mb-8 text-[10px] font-black uppercase tracking-[0.18em]">05 / Iniciar proyecto</p>
            <h2 className="font-display text-[clamp(4rem,9vw,9rem)] font-semibold leading-[0.76] tracking-[-0.085em]">Hagamos<br />algo que<br /><span className="font-display font-semibold not-italic">importe.</span></h2>
            <div className="mt-12 flex flex-wrap gap-3">
              <a className="group rounded-full bg-black px-6 py-4 text-[10px] font-black uppercase tracking-[0.14em] text-white" href="mailto:polancodesign@gmail.com">Escribir a José <Arrow className="text-acid" /></a>
              <a className="group rounded-full border border-black/30 px-6 py-4 text-[10px] font-black uppercase tracking-[0.14em]" href="tel:+18492763532">+1 849 276 3532 <Arrow /></a>
            </div>
          </div>

          <form onSubmit={submit} className="self-end rounded-[2rem] bg-black p-6 text-white shadow-[0_2rem_6rem_rgba(0,0,0,0.18)] sm:p-10" data-reveal>
            <div className="mb-9 flex items-center justify-between"><h3 className="font-display text-3xl font-semibold tracking-[-0.05em]">Cuéntame el proyecto.</h3><span className="grid size-10 place-items-center rounded-full bg-acid text-black">↗</span></div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="field"><span>Tu nombre *</span><input name="name" required autoComplete="name" placeholder="Nombre" /></label>
              <label className="field"><span>Empresa / equipo</span><input name="company" autoComplete="organization" placeholder="Empresa" /></label>
            </div>
            <label className="field"><span>¿Qué necesitas? *</span><select name="service" required value={selectedService} onChange={(event) => onServiceChange(event.target.value)}><option value="" disabled>Selecciona un servicio</option>{services.map((service) => <option key={service.id} value={service.title}>{service.title}</option>)}<option value="Otro proyecto de diseño">Otro proyecto de diseño</option></select></label>
            <label className="field"><span>El proyecto en pocas palabras *</span><textarea name="message" required rows="4" placeholder="Objetivos, entregables, plazos..." /></label>
            <button type="submit" className="group mt-3 flex w-full items-center justify-between rounded-full bg-acid px-6 py-4 text-[10px] font-black uppercase tracking-[0.16em] text-black"><span>Enviar resumen por WhatsApp</span><Arrow /></button>
            <p className="mt-4 text-center text-[9px] text-white/35">No almacenamos datos. WhatsApp se abrirá con el resumen listo para enviar.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#080808] py-10 text-white">
      <div className="mx-auto flex w-[min(92vw,1500px)] flex-col gap-8 border-t border-white/15 pt-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-4"><span className="grid size-12 place-items-center rounded-full bg-white"><img src={brandLogo} alt="Logo oficial de Polanco Graphics" className="size-8 object-contain" /></span><div><strong className="font-display text-2xl font-semibold tracking-[-0.05em]">José Miguel Méndez<span className="text-acid">.</span></strong><p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">Diseñador gráfico · República Dominicana</p></div></div>
        <div className="flex flex-wrap gap-6 text-[9px] font-black uppercase tracking-[0.14em] text-white/55"><a className="hover:text-acid" href="#work">Proyectos</a><a className="hover:text-acid" href="#services">Servicios</a><a className="hover:text-acid" href="#top">Volver arriba ↑</a><span>© {new Date().getFullYear()}</span></div>
      </div>
    </footer>
  );
}

export default function App() {
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    requestAnimationFrame(() => {
      target.scrollIntoView({ block: "start" });
      requestAnimationFrame(() => { root.style.scrollBehavior = previousBehavior; });
    });
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -8%" });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <><a href="#top" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-acid focus:px-4 focus:py-3 focus:text-black">Saltar al contenido</a><Header /><main><Hero /><Marquee /><Services onSelect={setSelectedService} /><SelectedWork /><About /><Process /><Contact selectedService={selectedService} onServiceChange={setSelectedService} /></main><Footer /></>;
}
