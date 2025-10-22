import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Check if the current mode is 'production' (or whatever mode you use for deployment)
  const isProduction = mode === "production";

  return {
    // Conditionally set the 'base' property
    // If it's production, use '/myblog/'. If not (e.g., development), use the default '/' or omit it.
    base: isProduction ? "/myblog/" : "/",

    plugins: [react()],
  };
});
