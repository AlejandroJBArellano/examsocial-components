/**
 * Tailwind CSS configuration for ExamSocial Components
 * This file exports the Tailwind configuration used by the library
 * so it can be extended by consuming applications.
 */

// Import the original configuration
import tailwindConfig from "../tailwind.config.js";

/**
 * Function to create a Tailwind config that extends the ExamSocial Components theme
 * @param {Object} customConfig - Your custom Tailwind configuration
 * @returns {Object} - Merged Tailwind configuration
 */
export function createTailwindConfig(customConfig = {}) {
  // Deep merge the configurations
  return {
    ...tailwindConfig,
    // Allow content to be extended
    content: [
      ...(tailwindConfig.content || []),
      ...(customConfig.content || []),
    ],
    theme: {
      ...tailwindConfig.theme,
      extend: {
        ...(tailwindConfig.theme?.extend || {}),
        ...(customConfig.theme?.extend || {}),
      },
    },
    // Merge plugins
    plugins: [
      ...(tailwindConfig.plugins || []),
      ...(customConfig.plugins || []),
    ],
  };
}

// Export the original config as default
export default tailwindConfig;
