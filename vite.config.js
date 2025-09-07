import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // لأن المستودع root: https://newmazen.github.io/
  plugins: [react()],
});
