# Estándares de Diseño Neobrutalista: Elementos de Acción y Navegación

Este documento define el estándar arquitectónico y visual abstraído de los componentes interactivos principales (ej. Buttons, Switches, ActionButtons). 
Estos elementos representan las interacciones directas del usuario y concentran la mayor expresividad del estilo.

## 1. Atributos Visuales (Bordes, Sombras, Colores)

- **Bordes:** 
  - Todos los elementos deben poseer un borde sólido e ininterrumpido. Por defecto es de 1px (`border`), y para elementos de alta jerarquía (como botones de acción icónicos) puede subir a 2px (`border-2`).
  - **Color de borde:** Primordialmente negro (`border-black`) para definir fuertemente la silueta, o bien del color temático en estados de error/disabled.
  - **Radios (Border Radius):** Se utiliza `rounded-md` (8px) o `rounded-lg` (12px) para botones estándar. Los botones de icono, de índice y switches requieren círculos perfectos usando `rounded-full` (9999px).

- **Sombras:**
  - Característica core: **Sombras asimétricas sólidas** sin desenfoque (blur de 0px).
  - Basadas del lado derecho inferior: Se parte de una sombra corta `shadow-right-sm` (2px 2px) y crecen a `shadow-right` (4px 4px) u `shadow-right-lg` (8px 8px).
  - El color de la sombra suele ser negro (`#000`), pero muta al color de la temática cuando hay feedback crítico (ej. `shadow-feedback-error`).

- **Colores:**
  - Los colores sólidos dominan, utilizando la paleta extraída del tema (`light`, `primary`, `accent`, `extra`).
  - Se utilizan versiones atenuadas (Tints) para manejar fondos cuando la silueta ya se delineó con un color fuerte.

## 2. Reglas de Espaciado (Padding/Gap)

- **Ratios y Superficies de Impacto (Paddings):**
  - Botones estándar alojan áreas de toque grandes: de `px-4 py-2` en móviles a `px-6` en desktop (`xl:`).
  - Los botones de icono mantienen aspect ratios cuadrados proporcionados mediante padding simétrico (ej. `p-2`).
  - **Switches y Controles Pequeños:** Utilizan paddings milimétricos (`p-[1px]` a `p-[3px]`) para enmarcar el contenedor y generar un riel perfecto para la pieza móvil.

- **Responsive Scaling:**
  - El escalado usa siempre el breakpoint `xl` para aumentar marginalmente el tamaño de texto (`text-2xl`), paddings y las sombras relativas.

## 3. Comportamiento en Estados (Hover, Active, Focus)

- **Hover (Interacción):**
  - Crece la profundidad: El desplazamiento visual se genera al aumentar la longitud de la sombra dura (ej. `hover:shadow-right`), dando la ilusión de que la pieza "se levanta".
  - Transiciones marcadas pero controladas (`duration-300 ease-out`).
  - Ciertos componentes de acción secundarios experimentan inversión de colores (fondo color a fondo neutro con borde coloreado).

- **Active / Checked:**
  - Modificación estructural de color: Un elemento seleccionado (como un Switch activado o un ActionButton) suprime elementos de contorno o rellena con el color `primary / accent`.
  - El fondo y el thumb interno experimentan transformaciones de color agresivas (ej. negro a claro y fondo del riel a primario).

- **Disabled (Inactivo):**
  - **Pérdida de tridimensionalidad:** Se elimina completamente la sombra (`disabled:shadow-none`).
  - **Desaturación:** El borde pasa a ser grisáceo (`border-gray-800`), el fondo toma tintes pastel/desaturados o grises, y el cursor indica explícitamente `not-allowed`.
