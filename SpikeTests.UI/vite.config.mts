import { fileURLToPath, URL } from "node:url";

import { resolve } from "path";
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";

import vue from "@vitejs/plugin-vue";

const config = {
    about: {
        entry: resolve(__dirname, "Vue/Views/About/main.ts"),
        name: "VueAppAbout",
        fileName: "js/vueappabout",
    },
    search: {
        entry: resolve(__dirname, "Vue/Views/Search/main.ts"),
        name: "VueAppSearch",
        fileName: "js/vueappsearch",
    },
};

const currentConfig = config[process.env.LIB_NAME];

if (currentConfig === undefined) {
    throw new Error("LIB_NAME is not defined or is not valid");
}

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler'
            }
        }
    },
    build: {
        sourcemap: true,
        emptyOutDir: false,
        outDir: "wwwroot",
        lib: {
            ...currentConfig,
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
                assetFileNames: "css/" + process.env.LIB_NAME + ".[ext]",
            },
        },
        write: true,
    },
    plugins: [
        vue({
            template: {
                transformAssetUrls: {
                    includeAbsolute: false,
                },
            },
        }),
        vueJsx(),
    ],
    base: process.env.NODE_ENV === "production" ? "./" : "/",
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./Vue", import.meta.url)),
        },
    },
    define: {
        'process.env': process.env
    }
});
