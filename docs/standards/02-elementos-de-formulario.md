# Estándares de Diseño Neobrutalista: Elementos de Formulario

Este apartado sistematiza las reglas abstractas en contradas en campos de captura de datos (ej. Input, Textarea, Select). 
El objetivo en los formularios de este diseño es mantener la estructura rígida y plana del neobrutalismo, garantizando la legibilidad visual inconfundible de qué área es un input.

## 1. Atributos Visuales (Bordes, Sombras, Colores)

- **Bordes:** 
  - La caja de texto se define estrictamente mediante bordes finos pero sólidos: `border border-black`.
  - Las esquinas están moderadamente redondeadas (`rounded-md`), evitando radios agresivos (`rounded-full`) en campos de texto extensos para preservar una cuadrícula clara.

- **Sombras:**
  - **Reposo Activo:** Los campos mantienen, por defecto, una sombra asimétrica baja constante (`shadow-right-sm`) que da la noción de una lámina física sobre el fondo.
  - El error inyecta la semántica de forma extrema, colonizando la sombra para usar el color rojo/advertencia (`shadow-feedback-error`).

- **Colores:**
  - **Fondo:** El estado vainilla usa un fondo cálido pero neutral (`bg-light`).
  - **Textos de Ayuda/Placeholder:** Grises no saturados (`text-zinc-700`) que no compitan con el borde negro y el valor escrito en el interior.
  - **Errores:** Fondos tintados con la variable de error (`bg-feedback-error-tint`) para advertir que la pieza física está estructuralmente equivocada.

## 2. Reglas de Espaciado (Padding/Gap)

- **Cajas Altas y Espaciosas:**
  - Los campos demandan superficies grandes para teclear cómodamente, usando `px-4 py-3` por defecto.
  - **Desktop (xl):** El texto crece a `xl:text-lg` y el padding vertical se equilibra `xl:py-2` para contrarrestar el tamaño de la tipografía.
  
- **Disposiciones de Iconos (Gaps Internos):**
  - Insertos en Absolute Posititon: Iconos dentro del input no son alineados flex en el dom por defecto por la naturaleza del `<input>`, sino posicionados absolutamente. 
  - Esto requiere espacios de reserva asimétricos o explícitos en el input real (`pl-10`, `pr-10`) asegurando que jamás se traslape el ícono y el texto.

## 3. Comportamiento en Estados (Hover, Active, Focus)

- **Estado Vacío / Pasivo (Placeholder-shown):**
  - Un campo sin contenido intencionalmente anula sus sombras intrusivas (`placeholder-shown:shadow-none`). Las sombras solo "despiertan" al interactuar o tener datos para dirigir la atención.

- **Hover:**
  - Oscurecimiento del límite (`hover:border-black`) y aparición/aumento de la sombra (`hover:shadow-black` o `hover:shadow-right`) sugieriendo disponibilidad física de ser pulsado.

- **Focus:**
  - Reemplaza de inmediato el borde negro convencional por un borde llamativo temático grueso (`focus:border-primary`) acompañado de una sombra de foco coloreada (`focus:shadow-primary`).
  - El outline nativo del navegador está completamente anulado (`focus:outline-none`) en pro del sistema personalizado y consistente de siluetas de colores.
