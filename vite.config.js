import postcssMixins from 'postcss-mixins';
import postcssNested from 'postcss-nested';
import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        postcss: {
            plugins: [postcssMixins, postcssNested],
        },
    },
});
