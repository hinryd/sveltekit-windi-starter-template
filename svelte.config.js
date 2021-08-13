import preprocess from 'svelte-preprocess'
import WindiCSS from 'vite-plugin-windicss'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        adapter: adapter({
            // default options are shown
            pages: 'build',
            assets: 'build',
            fallback: null
        }),
        target: 'body',
        vite: () => ({
            plugins: [WindiCSS.default()]
        })
    }
}

export default config
