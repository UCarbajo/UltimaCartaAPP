import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import JuegoView from "../views/JuegoView.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: IndexView,
    meta: { headerStyle: false },
  },
  {
    path: "/jugar",
    name: "Jugar",
    component: JuegoView,
    meta: { headerStyle: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
