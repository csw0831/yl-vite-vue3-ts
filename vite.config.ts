import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import url from "url"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import Pages from "vite-plugin-pages"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import postCssPxToRem from "postcss-pxtorem"
import postcssPresetEnv from "postcss-preset-env"
const { resolve } = path

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  hot: true,
  plugins: [
    vue(),
    Pages(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      eslintrc: {
        enabled: false,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true
      },
      resolvers: [ElementPlusResolver()],
      dts: true
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          // 自适应，px>rem转换
          rootValue: 192, //pc端建议：192，移动端建议：75；设计稿宽度的1 / 10
          propList: ["*", "!border"], // 除 border 外所有px 转 rem // 需要转换的属性，这里选择全部都进行转换
          selectorBlackList: [".norem"],
          // 过滤掉norem-开头的class，不进行rem转换，这个内容可以不写
          unitPrecision: 5, // 转换后的精度，即小数点位数
          replace: true, // 是否直接更换属性值而不添加备份属性
          mediaQuery: false, // 是否在媒体查询中也转换px为rem
          minPixelValue: 0 // 设置要转换的最小像素值
        }),
        postcssPresetEnv()
      ]
    },
    modules: {
      //  localsConvention: 'camelCase'
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/index.scss";`
      }
    }
  },
  build: {
    chunkSizeWarningLimit: 1024,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === "production",
        drop_debugger: process.env.NODE_ENV === "production"
      }
    },
    rollupOptions: {
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        manualChunks: {
          elementPlus: ["element-plus", "@element-plus/icons-vue"],
        }
      }
    }
  },

  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  server: {
    host: "0.0.0.0",
    port: 9536,
    open: false,
    https: false,
    proxy: {
      "/api": {
        target: "要代理的地址",
        changeOrigin: true,
        ws: true,
        rewrite: (path: string) => path.replace(/^\/api/, "")
      }
    }
  }
})
