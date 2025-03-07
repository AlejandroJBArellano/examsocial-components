# Configuración de Tailwind CSS

Esta sección proporciona información detallada sobre cómo utilizar y extender la configuración de Tailwind CSS incluida en ExamSocial Components.

## Índice

1. [Introducción](#introducción)
2. [Uso Básico](#uso-básico)
3. [Extender la Configuración](#extender-la-configuración)
4. [Temas Disponibles](#temas-disponibles)
5. [Personalización Avanzada](#personalización-avanzada)

## Introducción

ExamSocial Components utiliza Tailwind CSS para sus estilos y exporta su configuración para que puedas utilizarla en tu proyecto. Esto te permite mantener una coherencia visual entre tus componentes personalizados y los componentes de la biblioteca.

La configuración incluye:

- Paletas de colores personalizadas
- Extensiones de espaciado, bordes y sombras
- Múltiples temas a través del plugin `tailwindcss-themer`
- Configuraciones de tipografía y otros estilos

## Uso Básico

Para utilizar la configuración de Tailwind de ExamSocial Components en tu proyecto:

```js
// tailwind.config.js
import { tailwindConfig } from 'examsocial-components';

export default tailwindConfig;
```

Luego, asegúrate de incluir la configuración en tu archivo de PostCSS:

```js
// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## Extender la Configuración

Si deseas extender la configuración con tus propios estilos, puedes utilizar la función `createTailwindConfig`:

```js
// tailwind.config.js
import { createTailwindConfig } from 'examsocial-components';

export default createTailwindConfig({
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Tus archivos
  ],
  theme: {
    extend: {
      // Tus extensiones de tema
      colors: {
        custom: '#ff0000',
        'custom-dark': '#990000',
      },
      fontFamily: {
        custom: ['CustomFont', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Tus plugins adicionales
  ],
});
```

La función `createTailwindConfig` realiza una fusión profunda de la configuración de ExamSocial Components con tu configuración personalizada, asegurando que no se pierdan las configuraciones originales.

## Temas Disponibles

La configuración de Tailwind incluye varios temas predefinidos que puedes utilizar:

### Default

El tema por defecto con una paleta de colores moderna y fresca:

```
colors: {
  primary: {
    DEFAULT: "#66E5FF",
    shadow: "#047C95",
    tint: "#EDFAFD",
  },
  secondary: {
    DEFAULT: "#B9B2FF",
    shadow: "#5647EB",
    tint: "#F1F0FF",
  },
  accent: {
    DEFAULT: "#FF5C96",
    shadow: "#AD1F51",
    tint: "#FFEBF2",
  },
  extra: {
    DEFAULT: "#FFC34D",
    shadow: "#E59800",
    tint: "#FFF5E0",
  },
  // ... más colores
}
```

### INDUSTRIAL_EDGE

Un tema con colores más fuertes y contrastantes, ideal para interfaces industriales o técnicas.

### EARTHY_TONES

Un tema con tonos terrosos y naturales, perfecto para aplicaciones relacionadas con la naturaleza, educación o bienestar.

### VIBRANT_ORCHID

Un tema vibrante con colores púrpura como base, ideal para aplicaciones creativas o de entretenimiento.

### Uso de Temas

Para cambiar entre temas, puedes utilizar las clases CSS proporcionadas por el plugin `tailwindcss-themer`:

```html
<!-- Tema por defecto -->
<div>
  <button class="bg-primary text-white">Botón con tema por defecto</button>
</div>

<!-- Tema INDUSTRIAL_EDGE -->
<div class="theme-INDUSTRIAL_EDGE">
  <button class="bg-primary text-white">Botón con tema industrial</button>
</div>

<!-- Tema EARTHY_TONES -->
<div class="theme-EARTHY_TONES">
  <button class="bg-primary text-white">Botón con tema terroso</button>
</div>

<!-- Tema VIBRANT_ORCHID -->
<div class="theme-VIBRANT_ORCHID">
  <button class="bg-primary text-white">Botón con tema vibrante</button>
</div>
```

## Personalización Avanzada

### Añadir Nuevos Temas

Si deseas añadir tus propios temas, puedes extender la configuración de Tailwind y añadir nuevos temas al plugin `tailwindcss-themer`:

```js
// tailwind.config.js
import { createTailwindConfig } from 'examsocial-components';
import tailwindThemer from 'tailwindcss-themer';

// Obtén la configuración base
const baseConfig = createTailwindConfig({
  // Tu configuración base
});

// Añade tu propio tema
baseConfig.plugins.push(
  tailwindThemer({
    themes: [
      {
        name: 'MY_CUSTOM_THEME',
        extend: {
          colors: {
            primary: {
              shadow: '#123456',
              DEFAULT: '#234567',
              tint: '#345678',
            },
            // ... más colores
          },
        },
      },
    ],
  })
);

export default baseConfig;
```

### Personalización de Componentes

Cuando crees tus propios componentes, puedes utilizar las mismas clases y variables de Tailwind que utiliza ExamSocial Components para mantener una coherencia visual:

```jsx
// Tu componente personalizado
function CustomButton({ children, theme = 'primary' }) {
  return (
    <button
      className={`
        border px-4 py-2 shadow-right-sm 
        bg-${theme} border-black 
        hover:shadow-right transition-all
        disabled:cursor-not-allowed disabled:shadow-none
      `}
    >
      {children}
    </button>
  );
}
```

### Acceso a la Configuración Programáticamente

Si necesitas acceder a la configuración de Tailwind programáticamente (por ejemplo, para utilizar los mismos colores en un gráfico o en CSS-in-JS), puedes importar la configuración:

```jsx
import { tailwindConfig } from 'examsocial-components';

function MyComponent() {
  // Acceder a un color de la configuración
  const primaryColor = tailwindConfig.theme.extend.colors.primary.DEFAULT;
  
  return (
    <div style={{ backgroundColor: primaryColor }}>
      Contenido con color primario
    </div>
  );
}
``` 