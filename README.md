# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# ExamSocial Components

Librería de componentes React para ExamSocial.

## Instalación

```bash
npm install examsocial-components
```

## Uso

### Importar componentes

```jsx
import { Button, Card } from 'examsocial-components';

function App() {
  return (
    <div>
      <Card>
        <h1>Hola Mundo</h1>
        <Button>Click me</Button>
      </Card>
    </div>
  );
}
```

### Importar estilos

Hay dos formas de utilizar los estilos de la librería:

#### 1. Importar los estilos procesados de Tailwind

Esta es la forma más sencilla. Simplemente importa el archivo CSS procesado en tu aplicación:

```jsx
// En tu archivo principal (por ejemplo, main.js, index.js, App.js)
import 'examsocial-components/tailwind.css';
```

Con esto, no necesitas configurar Tailwind en tu proyecto para procesar los estilos de la librería.

#### 2. Extender la configuración de Tailwind

Si prefieres tener más control y ya estás utilizando Tailwind en tu proyecto, puedes extender la configuración:

```js
// tailwind.config.js
import { createTailwindConfig } from 'examsocial-components';

export default createTailwindConfig({
  // Tu configuración personalizada
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // Tus extensiones personalizadas
    },
  },
});
```

### Importar fuentes

La librería incluye las fuentes Satoshi y Sentient. Para utilizarlas:

```jsx
// En tu archivo principal
import 'examsocial-components/fonts.css';
```

## Desarrollo

### Instalar dependencias

```bash
npm install
```

### Ejecutar en modo desarrollo

```bash
npm run dev
```

### Construir la librería

```bash
npm run build
```

### Ejecutar pruebas

```bash
npm test
```

### Ejecutar Storybook

```bash
npm run storybook
```
