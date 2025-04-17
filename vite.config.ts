import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // 👈 make sure to import this

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 👈 this is the alias
    },
  },
  server: {
    host: "0.0.0.0", // This allows access from other devices
    port: 5173, // You can change this port if needed
  },
});
