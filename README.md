# Portafolio de José Miguel Méndez

Experiencia visual premium para Polanco Graphics, construida con React, Vite y Tailwind CSS 4 sobre la rama `gh-pages`.

## Ejecutar localmente

```powershell
npm install
npm run dev
```

Luego abrir `http://127.0.0.1:4173/`.

## Estructura

- `src/App.jsx`: componentes, contenido e interacciones.
- `src/index.css`: Tailwind, tokens visuales y motion.
- `vite.config.js`: configuración de Vite con rutas compatibles con GitHub Pages y Vercel.
- `vercel.json`: framework, build, directorio de salida y fallback de la SPA.
- `imagenes/jose-miguel-mendez.jpeg`: retrato real utilizado en el sitio.
- `AUDITORIA.md`: hallazgos y decisiones de la reconstrucción.
- `INTEGRACION-ANDYROSADO.md`: despliegue y flujo de colaboración.

## Producción

```powershell
npm run build
```

El sitio compilado se genera en `dist/`.

## Desplegar en Vercel

1. Importar `andyRS/PolancoGraphics` desde GitHub.
2. Seleccionar `gh-pages` como rama de producción.
3. No es necesario sobrescribir la configuración: `vercel.json` instala también las dependencias de build y establece Vite, `npm run build` y `dist`.
4. La versión de Node está fijada en `24.x` desde `package.json`.

Después de conectar el repositorio, cada nuevo push a `gh-pages` generará un despliegue automático.
