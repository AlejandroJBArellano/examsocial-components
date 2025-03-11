# Documentación de ExamSocial Components

Bienvenido a la documentación de ExamSocial Components. Esta documentación proporciona información detallada sobre todos los componentes disponibles en la biblioteca.

## Índice General

1. [Introducción](../DOCUMENTATION.md) - Visión general del proyecto, instalación y uso
2. [Configuración de Tailwind](../DOCUMENTATION.md#configuración-de-tailwind) - Cómo utilizar y extender la configuración de Tailwind
3. [Guía de Contribución](../CONTRIBUTING.md) - Cómo contribuir al proyecto

## Categorías de Componentes

1. [Componentes de UI Básicos](./UI-COMPONENTS.md) - Botones, inputs, selects, etc.
2. [Componentes de Navegación](./NAVIGATION-COMPONENTS.md) - Navbar, tabs, menús, etc.
3. [Componentes de Formularios](./FORM-COMPONENTS.md) - Campos de formulario, carga de imágenes, etc.
4. [Componentes de Exámenes](./EXAM-COMPONENTS.md) - Tarjetas de examen, creación de exámenes, etc.
5. [Componentes Sociales](./SOCIAL-COMPONENTS.md) - Posts, comentarios, botones de favoritos, etc.
6. [Componentes de Utilidades](./UTILITY-COMPONENTS.md) - Tooltips, diálogos, códigos QR, etc.
7. [Configuración de Tailwind (Detallada)](./TAILWIND-CONFIG.md) - Guía completa de la configuración de Tailwind

## Estructura de la Documentación

Cada archivo de documentación de componentes sigue la misma estructura:

- **Introducción** - Breve descripción de la categoría de componentes
- **Índice** - Lista de componentes documentados en el archivo
- **Componentes** - Documentación detallada de cada componente:
  - Descripción
  - Propiedades (props)
  - Ejemplos de uso

## Uso Rápido

Para empezar a utilizar ExamSocial Components en tu proyecto:

```bash
# Instalar la biblioteca
npm install examsocial-components

# Importar componentes y estilos
import { Button, Input } from 'examsocial-components';
import 'examsocial-components/index.css';
```

## Desarrollo

Para contribuir al desarrollo de la biblioteca, consulta la [Guía de Contribución](../CONTRIBUTING.md).

## Ejemplos

Puedes ver ejemplos de todos los componentes ejecutando Storybook:

```bash
npm run storybook
```

Esto abrirá Storybook en http://localhost:6006, donde podrás explorar todos los componentes disponibles, sus variantes y propiedades. 