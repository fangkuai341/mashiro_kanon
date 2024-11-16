import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
    },
  ],
});
export default router;
