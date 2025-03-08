import "./index.css";

import "./fonts/Satoshi_Complete/Fonts/WEB/css/satoshi.css";
import "./fonts/Sentient_Complete/Fonts/WEB/css/sentient.css";

// Export components
export * from "./components/index";

// Export utilities
export * from "./utils";

// Export types
export * from "./types";

// Export Tailwind configuration
// Note: We use a re-export pattern to maintain TypeScript compatibility
// while still exporting the JavaScript Tailwind config
export { createTailwindConfig, default as tailwindConfig } from "./tailwind";

/**
 * Para importar los estilos procesados de Tailwind en tu aplicación:
 *
 * ```js
 * // En tu archivo principal (por ejemplo, main.js, index.js, App.js)
 * import 'examsocial-components/tailwind.css';
 * ```
 *
 * Esto importará todos los estilos de Tailwind ya procesados, sin necesidad
 * de configurar Tailwind en tu proyecto para procesar estos estilos nuevamente.
 */
