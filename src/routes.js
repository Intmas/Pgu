import StartPage from "@/pages/StartPage";
import { createWebHistory, createRouter } from "vue-router";
import PostList from "@/pages/PostList";


const routes = [
    {
        path: '/',
        component: StartPage
    },
    {
        path: '/mock',
        component: PostList
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
