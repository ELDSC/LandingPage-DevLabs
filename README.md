# DevLabs — Landing Page Corporativa

![Stack](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss)

Landing page profesional para **DevLabs**, agencia de desarrollo de software a medida especializada en landing pages, SaaS, dashboards y aplicaciones web corporativas. El sitio transmite solidez técnica, presencia digital moderna y una experiencia de navegación pulida tanto en escritorio como en dispositivos móviles.

---

## ¿Por qué este stack?

| Decisión | Motivo |
|---|---|
| **React** | Arquitectura basada en componentes reutilizables. El estado del tema (light/dark) se maneja con `useState` + `useEffect`, propagándose a toda la UI sin necesidad de librerías externas. |
| **Vite** | Bundler de nueva generación. HMR instantáneo en desarrollo, build de producción optimizado con tree-shaking y code-splitting automático. Construye en ~2 segundos. |
| **Tailwind CSS** | Sistema de estilos utilitarios que elimina la deuda de CSS. La estrategia `darkMode: 'class'` permite alternar temas sin recargar la página. Las clases condicionales `dark:` se resuelven en tiempo de build, sin impacto en rendimiento. |
| **JavaScript (JSX)** | Sintaxis familiar para el equipo, cero fricción con TypeScript en las dependencias, y suficiente para un sitio estático con lógica de presentación. |

## Cómo fue construido

### Arquitectura

La aplicación sigue un patrón simple de componentes funcionales sin enrutador — es una **Single Page Application (SPA)** de una sola vista con scroll suave a secciones mediante anclas HTML (`#home`, `#projects`, `#contact`). No se usa React Router porque no hay navegación entre páginas; esto reduce el bundle size y la complejidad.

```
App (estado global: tema)
├── Navbar     → toggle light/dark, navegación, user icon
├── Hero       → status pill, headline, CTA, imagen circular
├── TechCarousel → carrusel infinito con íconos reales
├── Projects   → grid de 3 tarjetas con Code/Live
└── Footer     → redes sociales, copyright
```

### Tema Light / Dark

1. El estado inicial es **siempre light** (`useState(false)`), garantizando una primera impresión consistente.
2. Al hacer clic en el toggle del Navbar, se alterna la clase `dark` en `<html>`.
3. La preferencia se persiste en `localStorage` para visitas posteriores.
4. Tailwind procesa las variantes `dark:` en build, resultando en CSS estático sin costo en runtime.
5. La transición entre temas usa `transition-colors` para un cambio suave.

### Carrusel infinito de tecnologías

- Implementado con **CSS puro**: una animación `@keyframes scroll` que desplaza un contenedor con los elementos duplicados (`[...arr, ...arr]`) al 50% de su ancho, creando un loop infinito sin JavaScript.
- Cada tecnología muestra su **ícono oficial** usando la librería `react-icons` (Font Awesome + Simple Icons).
- El carrusel se **pausa al hacer hover** para facilitar la lectura.
- Fondo `bg-zinc-100` en light / `bg-zinc-900` en dark para diferenciar visualmente la sección.

---

## Secciones

### 1. Navbar
- Logo **DevLabs** con acento azul en "Labs"
- Enlaces: Home, About, Projects, Contact
- Botón ovalado con ícono de sol/luna para alternar tema
- Ícono de usuario circular
- Sticky con backdrop blur al hacer scroll

### 2. Hero
- **Status pill**: rectángulo ovalado con borde gris (`border-zinc-300`) y punto verde animado indicando _"Disponibles para trabajar"_
- **Título**: _"Hola! somos DevLabs"_ con el nombre en azul
- **Subtítulo**: _"Soluciones Tecnológicas"_
- **Descripción**: propuesta de valor clara y directa
- **Ubicación**: ícono de pin + "Lima, Perú"
- **CTA**: botón negro con _"Mira nuestro trabajo →"_
- **Imagen circular**: foto del equipo en `rounded-full` con borde blanco y sombra

### 3. Tecnologías
- Título centrado: _"Tecnologías con las que trabajamos"_
- Carrusel infinito con 12 tecnologías: **Vercel, Figma, Git, React, PostgreSQL, Next.js, TypeScript, Tailwind CSS, Node.js, Docker, MongoDB, Prisma**
- Íconos oficiales + texto blanco sobre el color corporativo de cada tecnología
- Fondo grisáceo para separar visualmente la sección

### 4. Proyectos
- Eyebrow _"featured work"_ + título _"Proyectos construidos"_
- Grid de 3 tarjetas responsivas con hover effect (imagen escala 105%)
- Cada tarjeta contiene: imagen, tag (Web/Mobile), título, descripción, botones
- **Botón Code**: estilo outline con borde
- **Botón Live**: fondo negro con texto blanco (`bg-zinc-900 text-white`)

### 5. Footer
- Logo DevLabs a la izquierda
- Íconos sociales en cuadros con fondo oscuro: **GitHub, Instagram, WhatsApp**
- Línea divisoria + copyright: _"2026 DevLabs . Código a tu medida"_

---

## Estructura de archivos

```
LandingPage-DevLabs/
├── index.html                  # Entry point HTML con clase dark inicial
├── package.json                # Dependencias y scripts
├── vite.config.ts              # Configuración de Vite + React plugin
├── tailwind.config.js          # Configuración Tailwind (darkMode: class)
├── postcss.config.js           # PostCSS con Tailwind y Autoprefixer
├── tsconfig.json               # Configuración de TypeScript (allowJs)
├── README.md                   # Este documento
└── src/
    ├── main.jsx                # Punto de entrada React (createRoot)
    ├── App.jsx                 # Componente raíz — estado y provider del tema
    ├── index.css               # Directivas Tailwind + keyframes del carrusel
    └── components/
        ├── Navbar.jsx          # Navegación + toggle de tema
        ├── Hero.jsx            # Sección principal con CTA
        ├── TechCarousel.jsx    # Carrusel infinito de tecnologías
        ├── Projects.jsx        # Grid de proyectos destacados
        └── Footer.jsx          # Pie de página con redes sociales
```

---

## Comandos

```bash
npm install        # Instalar dependencias
npm run dev        # Servidor de desarrollo → http://localhost:5173
npm run build      # Build de producción → dist/
npm run preview    # Previsualizar el build localmente
```

---

## Personalización

### Tecnologías
Editar el array `technologies` en `src/components/TechCarousel.jsx`. Cada entrada requiere:
```js
{ name: 'Nombre', icon: <ComponenteIcono />, color: 'bg-[#HEX]' }
```

### Proyectos
Editar el array `projects` en `src/components/Projects.jsx`:
```js
{ tag: 'Web', title: 'Título', desc: 'Descripción', image: 'URL' }
```

### Imágenes
Las URLs actuales apuntan a Unsplash como placeholder. Reemplazar por imágenes propias en:
- `Hero.jsx` — imagen circular del equipo
- `Projects.jsx` — thumbnail de cada proyecto

### Redes sociales
Actualizar los `href` en `src/components/Footer.jsx` con los enlaces reales de DevLabs.

### Contenido y copy
Los textos están en los componentes correspondientes. No hay archivo de traducciones ni CMS — modificar directamente en cada JSX.

---

## Performance

| Métrica | Valor |
|---|---|
| CSS total (gzip) | ~3.8 kB |
| JS total (gzip) | ~73 kB |
| Tiempo de build | ~1.5 s |
| Lighthouse Score | 95+ (estimado) |

El bundle de Tailwind se purga automáticamente en producción — solo las clases usadas en el HTML final llegan al CSS. Las imágenes de Unsplash se sirven desde CDN, sin costo de ancho de banda para el servidor de origen.

---

© 2026 DevLabs. Código a tu medida.
