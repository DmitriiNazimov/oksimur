import postcssMixins from 'postcss-mixins';
import postcssNested from 'postcss-nested';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import injectHTML from 'vite-plugin-html-inject-localize';
import viteImagemin from 'vite-plugin-imagemin';

const imgMinConfig = {
    gifsicle: { optimizationLevel: 3 },
    optipng: { optimizationLevel: 5 },
    mozjpeg: { quality: 60, progressive: true },
    pngquant: { quality: [0.8, 0.9], speed: 4 },
    svgo: {
        plugins: [
            { removeViewBox: false },
            { removeEmptyAttrs: false },
        ],
    },
};

export default defineConfig({
    css: {
        postcss: {
            plugins: [postcssMixins, postcssNested],
        },
    },
    plugins: [eslint(), injectHTML(), viteImagemin(imgMinConfig)],
});
