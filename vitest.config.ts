import { defineConfig, configDefaults } from "vitest/config";
import { resolve } from "path";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    exclude: [...configDefaults.exclude, ".vscode"],
  },
});
