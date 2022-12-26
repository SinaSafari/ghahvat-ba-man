// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),


	kit: {
		adapter: adapter()
// 		adapter: adapter({
// 			pages: "build",
// 			assets: "build"
// 		}),
		// prerender: { default: true },
// 		paths: {
// 			// change below to your repo name
// 			base: "/ghahvat-ba-man",
// 		},
	}
};

export default config;


