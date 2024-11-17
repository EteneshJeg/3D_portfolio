import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["three"] // Ensure 'three' is included during development
  },
  build: {
    rollupOptions: {
      external: ["three"], // Mark 'three' as an external dependency
      output: {
        globals: {
          three: "THREE" // Ensure global resolution
        }
      }
    }
  }
});
