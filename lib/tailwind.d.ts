/**
 * Type definitions for the Tailwind configuration
 */

// Define a simplified type for Tailwind config
// This is a simplified version, as the full Tailwind config type is quite complex
interface TailwindConfig {
  content?: string[];
  theme?: {
    extend?: Record<string, unknown>;
    [key: string]: unknown;
  };
  plugins?: unknown[];
  [key: string]: unknown;
}

/**
 * The default Tailwind configuration used by ExamSocial Components
 */
declare const tailwindConfig: TailwindConfig;

/**
 * Function to create a Tailwind config that extends the ExamSocial Components theme
 * @param customConfig - Your custom Tailwind configuration
 * @returns Merged Tailwind configuration
 */
export function createTailwindConfig(
  customConfig?: Partial<TailwindConfig>,
): TailwindConfig;

export default tailwindConfig;
