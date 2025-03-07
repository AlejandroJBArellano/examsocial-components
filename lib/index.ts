import "react-material-symbols/rounded";
import "./fonts.css";
import "./index.css";

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
