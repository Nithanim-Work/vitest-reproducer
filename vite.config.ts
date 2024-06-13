import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import { resolve } from "path";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslintPlugin()],
  server: {
    host: "localhost",
    port: 3000,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
