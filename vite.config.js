import postcssMixins from 'postcss-mixins';
import postcssNested from 'postcss-nested';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
    css: {
        postcss: {
            plugins: [postcssMixins, postcssNested],
        },
    },
    plugins: [eslint()],
});
