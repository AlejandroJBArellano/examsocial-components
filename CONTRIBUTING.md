# Guía de Contribución

Gracias por tu interés en contribuir a ExamSocial Components. Esta guía te ayudará a entender el proceso de contribución y cómo desarrollar nuevos componentes para la biblioteca.

> **Importante**: Antes de comenzar, por favor lee y familiarízate con los [Estándares de Código](./CODING_STANDARDS.md) que deben ser seguidos en este proyecto.

## Índice

1. [Configuración del Entorno](#configuración-del-entorno)
2. [Estructura de Componentes](#estructura-de-componentes)
3. [Desarrollo de Componentes](#desarrollo-de-componentes)
4. [Testing](#testing)
5. [Documentación con Storybook](#documentación-con-storybook)
6. [Pull Requests](#pull-requests)
7. [Estándares de Código](#estándares-de-código)

## Configuración del Entorno

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

4. Para ver los componentes en Storybook:
   ```bash
   npm run storybook
   ```

## Estructura de Componentes

Cada componente debe seguir la siguiente estructura de carpetas:

```
lib/components/ComponentName/
├── ComponentName.tsx       # Implementación del componente
├── ComponentName.test.tsx  # Tests del componente
├── ComponentName.stories.tsx  # Historias de Storybook
└── index.ts                # Archivo de exportación
```

### Archivo index.ts

El archivo `index.ts` debe exportar el componente:

```typescript
export { default as ComponentName } from './ComponentName';
```

## Desarrollo de Componentes

### Guías de Estilo

- Utiliza TypeScript para todos los componentes
- Utiliza TailwindCSS para los estilos
- Utiliza la función `cn` de la utilidad para combinar clases de TailwindCSS
- Sigue el patrón de diseño establecido en los componentes existentes

### Ejemplo de Componente

```tsx
import { ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  rounded?: boolean;
  theme?: "extra" | "light" | "accent" | "feedback-error" | "primary";
}

const Button = ({ rounded, theme, ...props }: ButtonProps) => {
  const classTheme = {
    extra: "bg-extra border-black",
    light: "bg-light border-black",
    accent: "bg-accent border-black",
    primary: "bg-primary border-black",
    "feedback-error": "bg-feedback-error-tint border-error-tint",
  };

  return (
    <button
      data-testid="button"
      {...props}
      className={cn(
        `border px-4 py-2 shadow-right-sm duration-300 ease-out hover:shadow-right hover:transition-all
        disabled:cursor-not-allowed disabled:shadow-none xl:px-6 xl:text-2xl xl:font-medium xl:shadow-right xl:hover:shadow-right-lg  xl:disabled:hover:shadow-none`,
        classTheme[theme || "light"],
        rounded ? "rounded-full" : "rounded-md",
        props.className
      )}
    />
  );
};

export default Button;
```

### Exportación de Componentes

Después de crear un nuevo componente, asegúrate de exportarlo en el archivo `lib/components/index.ts`:

```typescript
export * from "./ComponentName";
```

## Testing

Todos los componentes deben tener tests. Utilizamos Vitest y React Testing Library para los tests.

### Ejemplo de Test

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "./Button";

describe("Button component", () => {
    it("should render with default theme", async () => {
        render(<Button />);
        const button = await screen.findByTestId("button");
        expect(button.className).toContain("bg-light");
    });

    it("should render with extra theme", () => {
        render(<Button theme="extra" />);
        const button = screen.getByTestId("button");
        expect(button.className).toContain("bg-extra");
    });

    // Más tests...
});
```

Para ejecutar los tests:

```bash
npm run test
```

## Documentación con Storybook

Cada componente debe tener su correspondiente archivo de historia para Storybook.

### Ejemplo de Historia

```tsx
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

## Pull Requests

1. Crea una rama para tu característica o corrección:
   ```bash
   git checkout -b feature/nombre-de-la-caracteristica
   ```

2. Realiza tus cambios y haz commit:
   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   ```

3. Envía tus cambios al repositorio:
   ```bash
   git push origin feature/nombre-de-la-caracteristica
   ```

4. Crea un Pull Request en GitHub.

### Requisitos para Pull Requests

- Todos los tests deben pasar
- El código debe seguir las guías de estilo
- Cada componente nuevo debe tener tests y documentación en Storybook
- Incluye una descripción clara de los cambios realizados
- Crea un diagrama de mermaid para explicar el componente
- Comenta el código para que sea fácil de entender

## Consejos Adicionales

- Revisa los componentes existentes para entender el estilo y la estructura
- Utiliza los hooks y utilidades existentes cuando sea posible
- Mantén los componentes simples y enfocados en una sola responsabilidad
- Documenta las props de los componentes con comentarios o en las historias de Storybook 

## Estándares de Código

Hemos establecido estándares de código detallados para este proyecto. Por favor, consulta [CODING_STANDARDS.md](./CODING_STANDARDS.md) para obtener información completa sobre:

- Estándares generales de codificación
- Requisitos específicos para componentes
- Patrón compuesto para el desarrollo de componentes
- Requisitos para pruebas y stories
- Convenciones de nomenclatura
- Consideraciones de rendimiento
- Accesibilidad
- Requisitos de documentación 