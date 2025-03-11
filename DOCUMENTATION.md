# ExamSocial Components

Una biblioteca de componentes React para ExamSocial, construida con TypeScript, Vite y TailwindCSS.

## Índice

1. [Introducción](#introducción)
2. [Instalación](#instalación)
3. [Uso](#uso)
4. [Componentes](#componentes)
5. [Configuración de Tailwind](#configuración-de-tailwind)
6. [Desarrollo](#desarrollo)
7. [Testing](#testing)
8. [Storybook](#storybook)
9. [Construcción](#construcción)

## Introducción

ExamSocial Components es una biblioteca de componentes React diseñada para proporcionar una interfaz de usuario coherente y reutilizable para aplicaciones relacionadas con ExamSocial. La biblioteca está construida con TypeScript, Vite y TailwindCSS, y utiliza un enfoque modular para facilitar la reutilización de componentes.

## Instalación

Para instalar la biblioteca en tu proyecto, ejecuta:

```bash
npm install examsocial-components@latest
```

## Uso

Para utilizar los componentes en tu aplicación React, importa los componentes necesarios:

```jsx
import { Button, Input, Select } from 'examsocial-components';
import "examsocial-components/index.css"; // Importa los estilos

function App() {
  return (
    <div>
      <Button theme="primary">Click me</Button>
      <Input placeholder="Enter your name" />
      <Select>
        <Select.Option>Option 1</Select.Option>
      </Select>
    </div>
  );
}
```

## Componentes

La biblioteca incluye los siguientes componentes:

### UI Básicos

- **Button**: Botón personalizable con diferentes temas y estilos.
- **Input**: Campo de entrada de texto.
- **Select**: Selector desplegable.
- **Checkbox**: Casilla de verificación.
- **Switch**: Interruptor de activación/desactivación.
- **Textarea**: Área de texto para entradas más largas.
- **Tag**: Etiqueta para mostrar información categorizada.

### Navegación

- **Navbar**: Barra de navegación principal.
- **Tab**: Componente de pestañas para navegación.
- **MenuItem**: Elemento de menú para navegación.

### Formularios

- **Field**: Componente de campo de formulario con etiqueta y validación.
- **ImageInput**: Entrada para cargar imágenes.
- **ImageUploader**: Componente para cargar y previsualizar imágenes.
- **BannerInput**: Entrada para cargar imágenes de banner.
- **QuestionForm**: Formulario para crear/editar preguntas.

### Exámenes

- **ExamCard**: Tarjeta para mostrar información de un examen.
- **ExamDetail**: Vista detallada de un examen.
- **CreateExam**: Componente para crear un nuevo examen.
- **TakeExam**: Interfaz para realizar un examen.
- **QuestionSet**: Conjunto de preguntas para un examen.
- **QuestionList**: Lista de preguntas.
- **QuestionDetail**: Vista detallada de una pregunta.
- **AnswerOption**: Opción de respuesta para preguntas.
- **ReviewQuestionSet**: Componente para revisar un conjunto de preguntas.
- **UserAnswers**: Muestra las respuestas de un usuario.
- **MainContainer**: Contenedor de la descripción del examen

### Social

- **SocialPost**: Publicación social.
- **Comment**: Componente de comentario.
- **FavoriteButton**: Botón para marcar como favorito.
- **SaveButton**: Botón para guardar contenido.
- **ProfilePlaceholder**: Placeholder para perfiles de usuario.
- **PremiumBadge**: Insignia para usuarios premium.

### Utilidades

- **Tooltip**: Información emergente al pasar el cursor.
- **Dialog**: Diálogo modal.
- **QRCode**: Generador de códigos QR.
- **QRCodeCard**: Tarjeta con código QR.
- **Separator**: Separador visual.
- **Stepper**: Indicador de pasos en un proceso.
- **FeaturesCarousel**: Carrusel para mostrar características.
- **FeedbackScreen**: Pantalla para mostrar feedback.

### Temas disponibles de Tailwind

La configuración de Tailwind incluye varios temas predefinidos que puedes utilizar:

- **WHITEBOARD**: Tema por defecto
- **INDUSTRIAL_EDGE**: Tema industrial con colores más fuertes
- **EARTHY_TONES**: Tema con tonos terrosos y naturales
- **VIBRANT_ORCHID**: Tema vibrante con colores púrpura

Para cambiar entre temas, puedes utilizar las clases CSS proporcionadas por el plugin `tailwindcss-themer`:

```html
<div class="INDUSTRIAL_EDGE">
  <!-- Contenido con el tema INDUSTRIAL_EDGE -->
</div>
```

## Desarrollo

Para desarrollar componentes adicionales o modificar los existentes:

1. Clona el repositorio:
   ```bash
   git clone <repository-url>
   cd examsocial-components
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

### Estructura de Carpetas

```
examsocial-components/
├── dist/                # Archivos compilados
├── lib/                 # Código fuente
│   ├── components/      # Componentes React
│   │   ├── Button/      # Ejemplo de estructura de componente
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── index.ts
│   │   └── ...
│   ├── types.ts         # Definiciones de tipos TypeScript
│   ├── schemas.ts       # Esquemas de validación
│   ├── utils.ts         # Utilidades
│   ├── constants.ts     # Constantes
│   └── index.ts         # Punto de entrada principal
├── .storybook/          # Configuración de Storybook
├── node_modules/        # Dependencias
├── package.json         # Configuración del proyecto
├── tailwind.config.js   # Configuración de Tailwind
└── ...
```

## Testing

Los tests están escritos utilizando Vitest y React Testing Library. Para ejecutar los tests:

```bash
npm run test
```

## Storybook

La biblioteca utiliza Storybook para documentar y visualizar los componentes. Para iniciar Storybook:

```bash
npm run storybook
```

Esto abrirá Storybook en http://localhost:6006, donde podrás explorar todos los componentes disponibles, sus variantes y propiedades.

### Documentación de Componentes

Cada componente debe tener su correspondiente archivo de historia (`.stories.tsx`) que muestre las diferentes variantes y propiedades del componente. Por ejemplo:

```tsx
// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: "select",
      options: ["extra", "light", "accent", "feedback-error", "primary"],
    },
    rounded: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    theme: "light",
    rounded: false,
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Button",
    theme: "primary",
    rounded: false,
  },
};

// Más variantes...
```

## Construcción

Para construir la biblioteca para producción:

```bash
npm run build
```

Esto generará los archivos compilados en la carpeta `dist/`, que incluyen:
- `index.es.js`: Versión ES modules
- `index.umd.js`: Versión UMD
- `index.d.ts`: Definiciones de tipos TypeScript
- `style.css`: Estilos compilados

## Contribución

Para contribuir al proyecto:

1. Crea una rama para tu característica o corrección
2. Desarrolla y prueba tus cambios
3. Asegúrate de que todos los tests pasen
4. Envía un pull request

## Licencia

[Incluir información de licencia] 