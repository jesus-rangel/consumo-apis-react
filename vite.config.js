import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3030,
  },
  preview: {
    port: 4270,
  },

  build: {
    incremental: true,
    babel: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
    // Habilitar la aceleracion de compilacion del TS hacia JS
    /* typescript: {
      tsconfig: "./tsconfig.json"
    }, */
    // Habilitar los cambios mediante cache
    cache: true,

    // Habilitar la opcion de compresion para minimizar el tamaño de los archivos comprimidos
    minify: true,
    // Especificar el ambiente en el cual estamos manejando este contexto de ejecucion
    mode: "production",
    // Habilitar la configuracion del build mediante chunks parcelados
    chunks: true,
    // Habilitar la configuracion para minimizar el tamano de las librerias del proyecto
    moduleBundling: true,
    // Habilitar un partner del modo debug para habilitar mas recomendaciones
    devCode: true,
    // Habilitar un modo debug para las ejecuciones de la generacion del build
    debug: true,
  },
});
