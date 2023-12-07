import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        "@safe-globalThis/safe-ethers-adapters",
        "@safe-globalThis/safe-core-sdk",
        "@safe-globalThis/safe-ethers-lib"
      ]
    }
  },
  plugins: [react()],
  define: {
    global: "globalThis",
    "process.env": {},
  },
});