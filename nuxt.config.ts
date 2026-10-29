// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	modules: ["@nuxt/fonts", "@nuxt/icon/module", "@nuxt/image", "@nuxt/ui"],
	compatibilityDate: "2025-07-15",
	devtools: { enabled: false },
	css: ["~/assets/css/main.css"],
	ui: {
		colorMode: false,
	},
	vite: {
		plugins: [tailwindcss()],
		server: {
			allowedHosts: true,
		},
	},
	fonts: {
		families: [{ name: "Inter", provider: "google" }],
	},
	icon: {
		// Bundel ikon ke client agar tidak fetch saat runtime
		clientBundle: {
			scan: true, // otomatis memindai ikon yang dipakai di kode
		},
		serverBundle: "local", // pakai koleksi lokal untuk SSR
	},
});
