import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";
//import vercel from "vite-plugin-vercel";

// polyfill node
// https://gist.github.com/FbN/0e651105937c8000f10fefdf9ec9af3d

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    //vercel()
  ],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        NodeGlobalsPolyfillPlugin(),
        NodeModulesPolyfillPlugin(),
        //
      ],
    },
  },
});
