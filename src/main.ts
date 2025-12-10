import { createApp } from "vue"
import router from "./router"
import "./style.css"
import App from "./App.vue"
import "amfe-flexible"
import "@/utils/rem.js"
import * as ElementPlusIconsVue from "@element-plus/icons-vue" //引入图标
import "element-plus/dist/index.css"
console.log(import.meta.env.MODE, import.meta.env.VITE_APP_ENV, "人人")
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.mount("#app")
