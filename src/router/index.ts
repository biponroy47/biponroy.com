import { createRouter, createWebHistory } from "vue-router";

// Import your views/components
import Home from "../views/Home.vue";
import Software from "../views/Software.vue";
import Photography from "../views/Photography.vue";
import Articles from "../views/Articles.vue";

// Define routes
const routes = [
  { path: "/", component: Home },
  { path: "/software", component: Software },
  { path: "/photography", component: Photography },
  { path: "/articles", component: Articles },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
