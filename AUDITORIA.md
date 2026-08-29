# Auditoría del portafolio — rama `gh-pages`

Fecha de revisión: 28 de agosto de 2026.

## Resumen ejecutivo

La versión anterior tenía abundante contenido, pero no funcionaba como una herramienta comercial confiable. Presentaba muchos servicios sin jerarquía, afirmaciones difíciles de verificar, enlaces sin destino y una experiencia técnica pesada. La nueva versión posiciona a José Miguel como diseñador gráfico senior, muestra una selección curada, explica entregables y convierte la visita en un brief accionable por WhatsApp.

## Hallazgos de la versión anterior

1. **Propuesta de valor poco diferenciada.** La apertura priorizaba un video y un logo, pero no explicaba con rapidez qué problema resuelve el diseñador, para quién trabaja ni cómo contratarlo.
2. **Sobrecarga de servicios.** La repetición de tarjetas y listas convertía la oferta en un catálogo extenso. No había una agrupación comercial clara ni entregables asociados.
3. **Riesgos de credibilidad.** Se mostraban 120+ proyectos, 85+ clientes, 12 premios, cargos, empresas y testimonios sin evidencia enlazada. Estas afirmaciones se retiraron hasta que puedan documentarse.
4. **Portafolio genérico.** Las piezas se repetían entre páginas y los títulos describían proyectos o sectores que no estaban demostrados por casos de estudio. Los enlaces de proyecto apuntaban a `#`.
5. **Formulario roto.** El HTML cargaba `js/form-contacto.js`, pero el archivo no existía. El formulario usaba `action="#"`, por lo que no entregaba solicitudes.
6. **Enlaces incompletos.** Instagram, Behance y LinkedIn apuntaban a `#`. Los enlaces legales apuntaban a páginas inexistentes.
7. **Rendimiento.** El video de portada pesaba aproximadamente 12,6 MB y se precargaba. La foto anterior superaba 1 MB. La nueva portada elimina el video y utiliza la foto real de 80 KB.
8. **Complejidad innecesaria.** Había varios archivos de JavaScript para carruseles, paginación, tarjetas, barras, testimonios y animaciones aleatorias. La nueva versión concentra la interacción necesaria en un archivo pequeño.
9. **Accesibilidad irregular.** El control móvil no era un botón semántico y varias interacciones dependían del puntero. La nueva versión incorpora navegación por teclado, estados ARIA, enlace para saltar contenido, foco visible y compatibilidad con movimiento reducido.
10. **SEO y vista previa social limitados.** Se incorporaron título orientado al profesional, descripción, Open Graph, color de tema y dimensiones explícitas de imágenes.

## Decisiones de la reconstrucción

- Posicionamiento: diseñador gráfico senior disponible para marcas, agencias y equipos remotos.
- Oferta: identidad visual, campañas y contenido, editorial y presentaciones, diseño comercial.
- Conversión: llamada directa por WhatsApp y formulario que prepara un brief estructurado.
- Confianza: proceso de cuatro pasos, modalidad de colaboración y datos de contacto visibles.
- Contenido: sin cifras, premios, cargos ni testimonios no verificados.
- Visual: dirección editorial, tipografía de sistema, paleta carbón/citron/lavanda, uso protagonista del retrato real.
- Tecnología: HTML, CSS y JavaScript estáticos; sin dependencias externas ni proceso de compilación.

## Información pendiente para una segunda fase

- Enlaces reales de Behance, Instagram o LinkedIn.
- Nombres, objetivos y resultados verificables de 3 a 5 proyectos.
- Software que domina y formatos de entrega habituales.
- Años reales de experiencia, formación y puestos comprobables.
- Testimonios autorizados con nombre, empresa y permiso de publicación.
- Política de privacidad si más adelante se almacenan datos en un formulario o CRM.

## Recomendación de contenido

El próximo salto de calidad no vendrá de más animación, sino de convertir tres piezas en casos de estudio: problema, alcance, criterio, proceso, entregables y resultado. Con esa evidencia será razonable agregar métricas y testimonios.
