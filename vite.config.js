import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { resolve } from 'path'

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'src/app.html'),
			},
		},
	},
	server: {
		fs: {
			allow: ["public/"]
		}
	}
});
