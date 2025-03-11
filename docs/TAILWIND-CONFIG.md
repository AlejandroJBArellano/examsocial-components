# Configuración de Tailwind CSS

Esta sección proporciona información detallada sobre cómo utilizar y extender la configuración de Tailwind CSS incluida en ExamSocial Components.

## Índice

1. [Introducción](#introducción)
2. [Temas Disponibles](#temas-disponibles)
3. [Personalización Avanzada](#personalización-avanzada)

## Introducción

ExamSocial Components utiliza Tailwind CSS para sus estilos y exporta su configuración para que puedas utilizarla en tu proyecto. Esto te permite mantener una coherencia visual entre tus componentes personalizados y los componentes de la biblioteca.

La configuración incluye:

- Paletas de colores personalizadas
- Extensiones de espaciado, bordes y sombras
- Múltiples temas a través del plugin `tailwindcss-themer`
- Configuraciones de tipografía y otros estilos

## Temas Disponibles

La configuración de Tailwind incluye varios temas predefinidos que puedes utilizar:

### WHITEBOARD

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
<div class="INDUSTRIAL_EDGE">
  <button class="bg-primary text-white">Botón con tema industrial</button>
</div>

<!-- Tema EARTHY_TONES -->
<div class="EARTHY_TONES">
  <button class="bg-primary text-white">Botón con tema terroso</button>
</div>

<!-- Tema VIBRANT_ORCHID -->
<div class="VIBRANT_ORCHID">
  <button class="bg-primary text-white">Botón con tema vibrante</button>
</div>
```

## Personalización Avanzada

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