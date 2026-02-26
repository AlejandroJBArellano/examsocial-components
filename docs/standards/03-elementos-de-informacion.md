# Estándares de Diseño Neobrutalista: Elementos de Información y Feedback

Esta abstracción detalla el comportamiento de partes menores de la UI usadas para dar semántica o estado de lectura (ej. Tags, Badges, Indicadores de Índice o Tooltips). 
Estos elementos informan sin robar el protagonismo de las acciones principales, pero siguen una convención rígida del sistema.

## 1. Atributos Visuales (Bordes, Sombras, Colores)

- **Bordes:**
  - El contorno (`border` 1px) es la línea divisoria irremplazable, pero a diferencia de botones, estos elementos utilizan el color semántico primario asignado para el borde (`border-primary`, `border-feedback-success`), y no exclusivamente negro.
  - Los bordes asumen formas redondeadas extremas tipo 'píldora' (`rounded-full`) que empaquetan la información fuertemente.

- **Sombras:**
  - **Modo Plano:** Al ser unidades informativas (a menudo dentro de contenedores o tarjetas que ya tienen sombra), estos elementos suelen omitir las sombras offset (sin `shadow-right`) para no recargar densamente la interfaz. Mantienen la estética neobrutalista mediante colores duros sin gradientes.

- **Colores (Sistema de Tintes):**
  - La clave visual es la pareja de Color Principal + Color Tintado (Pastel).
  - El fondo de la etiqueta se baña con un tinte diluido (`bg-[color]-tint`), y el texto usa el color ultra-saturado (`text-[color]`). 
  - Esta combinación permite que un color en un espacio muy confinado ofrezca altísimo contraste sin usar el bloque negro básico.

## 2. Reglas de Espaciado (Padding/Gap)

- **Ultra Compactos (Micro-Spacing):**
  - Construidos para anidarse donde sea, mantienen espacios internos muy reducidos. Por ejemplo, Tags con `px-2 py-1`.
  - Los tamaños tipográficos acompañan esta contracción: `text-xs` o `text-sm` como máximo en pantallas xl (`xl:text-sm`).

- **Proporción de Tooltips e Índices:**
  - Elementos enumeradores e informativos como el `IndexButton` (asociado muchas veces a Listados/Steps) imponen sus propias geometrías estrictas (`h-5 w-5`) garantizando la alineación perfecta de cuadrículas sin importar la variabilidad del texto interno.

## 3. Comportamiento en Estados (Hover, Active, Focus)

- **Ausencia Voluntaria de Hover Estructural:**
  - Al ser meritoros de solo lectura o indicadores de taxonomía, estos componentes ignoran (generalmente) las oscilaciones de levitación neobrutalistas.  
  - No hay expansión de sombras ni transiciones largas ni cambios de fondo al pasar el mouse.  La jerarquía exige que queden estáticos y estables; el diseño "pinta" y "delimita", pero no engaña prometiendo clickabilidad visual pesada si no la hay.
