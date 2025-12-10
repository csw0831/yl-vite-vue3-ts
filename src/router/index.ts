import { createRouter, createWebHistory } from "vue-router"
import routes from "~pages"
// const routes: Array<RouteRecordRaw> = [
//   {
//     path: "/",
//     name: "Home",
//     component: () => import("@/components/HelloWorld.vue")
//   },
//   {
//     path: "/login",
//     name: "Login",
//     component: () => import("@/components/Login.vue")
//   },
// ];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
