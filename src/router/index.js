import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import JuegoView from "../views/JuegoView.vue";
import ContactoView from "../views/ContactoView.vue";
import RegistroView from "../views/RegistroView.vue";
import RegistroEleccionView from "../views/RegistroEleccionView.vue";
import RegistroIndividualView from "../views/RegistroIndividualView.vue";
import RegistroCentroView from "../views/RegistroCentroView.vue";
import InicioSesionView from "../views/InicioSesionView.vue";
import NuevoView from "../views/NuevoView.vue";
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
  {
    path: "/contacto",
    name: "contacto",
    component: ContactoView,
    meta: { headerStyle: true },
  },
  {
    path: "/registro",
    component: RegistroView,
    meta: { headerStyle: true },
    children: [
      {
        path: "",
        name: "RegistroEleccion",
        component: RegistroEleccionView,
      },
      {
        path: "individual",
        name: "RegistroIndividual",
        component: RegistroIndividualView,
      },
      {
        path: "centro",
        name: "RegistroCentro",
        component: RegistroCentroView,
      },
    ],
  },
  {
    path: "/iniciarSesion",
    name: "InicioSesion",
    component: InicioSesionView,
    meta: { headerStyle: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

export default router;
