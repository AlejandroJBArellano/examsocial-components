import "./index.css";

// Export components
export * from "./components";

// Export utilities
export * from "./utils";

// Export illustrations
export * from "./illustrations";

// Export constants
export * from "./constants";

// Export Tailwind configuration
// Note: We use a re-export pattern to maintain TypeScript compatibility
// while still exporting the JavaScript Tailwind config

/**
 * Para importar los estilos procesados de Tailwind en tu aplicación:
 *
 * En tu archivo principal (por ejemplo, main.js, index.js, App.js)
 * ```js
 * import 'examsocial-components/index.css';
 * ```
 *
 * Esto importará todos los estilos de Tailwind ya procesados, sin necesidad
 * de configurar Tailwind en tu proyecto para procesar estos estilos nuevamente.
 */
