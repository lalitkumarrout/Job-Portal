import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Ensure the necessary extensions are here
    
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase the size limit to 1MB
  },
})
