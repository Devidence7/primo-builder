import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'

/** @type {import('vite').UserConfig} */
export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	build: {
		rollupOptions: {
			external: ['prettier/esm/parser-babel', 'prettier/esm/parser-postcss']
		}
	}
})
