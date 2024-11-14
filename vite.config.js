import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 8080 | 3000, // Menggunakan port dari env atau 3000
		host: true, // Mendengarkan di semua alamat IP, diperlukan untuk server
	},
});
