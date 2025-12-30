import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// Get base URL from environment or default to /
const base = (globalThis as any).process?.env?.BASE_URL || "/";

// https://vite.dev/config/
export default defineConfig({
	base,
	plugins: [react(), tailwindcss()],
});
