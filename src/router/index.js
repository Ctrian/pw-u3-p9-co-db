import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HolaMundoView from "../views/HolaMundoView.vue";
import PreguntaView from "../views/PreguntaView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    // carga eager, siempre carga
    component: HomeView,
  },
  {
    path: "/hola/:id",
    name: "Hola Mundo",
    component: HolaMundoView,
  },
  {
    path: "/pregunta",
    name: "PreguntaAPI",
    component: PreguntaView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/pokemon",
    name: "PokemonAPI",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "pokemon" */ "../views/PokemonView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
