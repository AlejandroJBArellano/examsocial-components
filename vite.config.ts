import react from "@vitejs/plugin-react";
import {
  copyFileSync,
  mkdirSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "fs";
import { join, resolve } from "path";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// Función para copiar directorios recursivamente
function copyDir(src: string, dest: string) {
  // Crear el directorio de destino si no existe
  if (!statSync(dest, { throwIfNoEntry: false })) {
    mkdirSync(dest, { recursive: true });
  }

  // Leer todos los archivos/directorios en el directorio fuente
  const entries = readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      // Si es un directorio, llamar recursivamente
      copyDir(srcPath, destPath);
    } else {
      // Si es un archivo, copiarlo
      copyFileSync(srcPath, destPath);
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./lib/index.ts"),
      name: "examsocial-components",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "tailwind.css";
          return assetInfo.name || "";
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    // Asegurarse de que los estilos CSS se generen como archivos separados
    cssCodeSplit: true,
  },
  plugins: [
    react(),
    dts({ rollupTypes: true }),
    // Comentamos este plugin para que los estilos no se inyecten en el JS
    // cssInjectedByJsPlugin(),
    {
      name: "copy-fonts",
      closeBundle() {
        // Copiar las fuentes a la carpeta dist
        const srcFontsDir = resolve(__dirname, "lib/fonts");
        const destFontsDir = resolve(__dirname, "dist/fonts");
        copyDir(srcFontsDir, destFontsDir);
        console.log("Fonts copied to dist/fonts");

        // Copiar el archivo CSS de fuentes a la carpeta dist
        const fontsCssContent = `/* Satoshi Font */
@font-face {
  font-family: 'Satoshi';
  src: url('./fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Light.woff2') format('woff2'),
       url('./fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Satoshi';
  src: url('./fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Regular.woff2') format('woff2'),
       url('./fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Satoshi';
  src: url('./fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Medium.woff2') format('woff2'),
       url('./fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Satoshi';
  src: url('./fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Bold.woff2') format('woff2'),
       url('./fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Satoshi';
  src: url('./fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Black.woff2') format('woff2'),
       url('./fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Black.woff') format('woff');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

/* Sentient Font */
@font-face {
  font-family: 'Sentient';
  src: url('./fonts/Sentient_Complete/Fonts/WEB/fonts/Sentient-Light.woff2') format('woff2'),
       url('./fonts/Sentient_Complete/Fonts/WEB/fonts/Sentient-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Sentient';
  src: url('./fonts/Sentient_Complete/Fonts/WEB/fonts/Sentient-Regular.woff2') format('woff2'),
       url('./fonts/Sentient_Complete/Fonts/WEB/fonts/Sentient-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Sentient';
  src: url('./fonts/Sentient_Complete/Fonts/WEB/fonts/Sentient-Medium.woff2') format('woff2'),
       url('./fonts/Sentient_Complete/Fonts/WEB/fonts/Sentient-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Sentient';
  src: url('./fonts/Sentient_Complete/Fonts/WEB/fonts/Sentient-Bold.woff2') format('woff2'),
       url('./fonts/Sentient_Complete/Fonts/WEB/fonts/Sentient-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Sentient';
  src: url('./fonts/Sentient_Complete/Fonts/WEB/fonts/Sentient-Black.woff2') format('woff2'),
       url('./fonts/Sentient_Complete/Fonts/WEB/fonts/Sentient-Black.woff') format('woff');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}`;
        writeFileSync(resolve(__dirname, "dist/fonts.css"), fontsCssContent);
        console.log("Fonts CSS copied to dist/fonts.css");
      },
    },
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
