import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensure relative paths for assets
  build: {
    outDir: "dist", // Output directory
    assetsDir: "assets", // Folder for static assets
    rollupOptions: {
      output: {
        // Ensure all dependencies are bundled, no globals
      }
    }
  },
  resolve: {
    alias: {
      three: "three" // Optional alias for clarity
    }
  }
});
