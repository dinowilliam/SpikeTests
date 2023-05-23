import { createWebHistory, createRouter } from "vue-router";
import SearchForm from "@/Search/Components/SearchForm/SearchForm.vue";
import SearchResults from "@/Search/Components/SearchResults/SearchResults.vue";

const routes = [
    {
        path: "/Search",
        name: "SearchForm",
        component: SearchForm,
    },
    {
        path: "/SearchResults",
        name: "SearchResults",
        component: SearchResults,
        props: { response: Array }
    },
];

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes,
});

export default router;
