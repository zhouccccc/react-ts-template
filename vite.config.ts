// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";



export default defineConfig(({ mode }) => {
  if (mode === "production") {
    return {
      plugins: [
        react(),
        visualizer({
          open: true, //注意这里要设置为true，否则无效
          gzipSize: true,
          brotliSize: true,
        }),
      ],
      resolve: {
        alias: {
          "@": path.resolve(__dirname,'src')
        },
      },
    };
  }

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname,'src')
      },
    },
  };
});