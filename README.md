# ExamSocial Components

Librería de componentes React para ExamSocial.

## Instalación

```bash
npm install examsocial-components
```

## Uso

### 1. Requisitos Globales (Fuentes e Íconos)

Para que los componentes se vean correctamente, necesitas importar las fuentes (Satoshi y Sentient) y los íconos (Material Symbols) en el archivo CSS global de tu proyecto anfitrión (por ejemplo, en tu `app/globals.css` o `index.css`).

Copiar y descargar estas fuentes al archivo destino:
```css
/* Importar fuentes web y material symbols */
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL,GRAD,opsz@100..700,0..1,-50..200,20..48');
@import url('https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&f[]=sentient@400,700&display=swap');
```
*También puedes descargar las fuentes físicas e incluirlas en tu build si lo prefieres para mejorar el rendimiento.*

### 2. Importar componentes y estilos

En el entry point principal de tu proyecto, no olvides importar el CSS compilado de la librería y tus componentes:

```jsx
import 'examsocial-components/index.css'; // Estilos base de los componentes
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
