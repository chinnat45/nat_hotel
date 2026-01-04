import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../components/pages/Dashboard.vue";
import Rooms from "../components/pages/Rooms.vue";
import Bookings from "../components/pages/Bookings.vue";
import Customers from "../components/pages/Customers.vue";
import Settings from "../components/pages/Settings.vue";

const routes = [
  { path: "/", name: "dashboard", component: Dashboard },
  { path: "/rooms", name: "rooms", component: Rooms },
  { path: "/bookings", name: "bookings", component: Bookings },
  { path: "/customers", name: "customers", component: Customers },
  { path: "/settings", name: "settings", component: Settings },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
