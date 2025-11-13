import QuemSou from "./components/views/QuemSou.vue";
import OQueFaco from "./components/views/OQueFaco.vue";
import Hobbies from "./components/views/Hobbies.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/quemsou" },
  { path: "/quemsou", component: QuemSou },
  { path: "/oquefaco", component: OQueFaco },
  { path: "/hobbies", component: Hobbies },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
