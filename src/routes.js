import StartPage from "@/pages/StartPage";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        component: StartPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router
