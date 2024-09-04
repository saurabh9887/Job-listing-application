import { createRouter, createWebHistory } from "vue-router";

// Lazy loading components
const Home = () => import("../pages/Home.vue");
const Jobs = () => import("../pages/Jobs.vue");
const Job = () => import("../pages/Job.vue");
const AddJob = () => import("../pages/AddJob.vue");
const EditJob = () => import("../pages/EditJob.vue");
const NotFound = () => import("../pages/NotFound.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/jobs", component: Jobs },
    { path: "/jobs/:id", component: Job },
    { path: "/jobs/add", component: AddJob },
    { path: "/jobs/edit/:id", component: EditJob },
    { path: "/:catchAll(.*)", component: NotFound },
  ],
});

export default router;
