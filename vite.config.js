import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // Baris 'base' SUDAH DIHAPUS
  plugins: [react(), tailwindcss()],
});
