import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This allows Vite to bind to 0.0.0.0
    port: 5173        // Optional: specify a port if needed (e.g., 3000)
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})