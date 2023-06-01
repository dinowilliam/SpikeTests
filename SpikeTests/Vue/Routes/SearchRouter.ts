import { createWebHistory, createRouter } from "vue-router";
import SearchForm from "@/Views/Search/Components/SearchForm/SearchForm.vue";
import SearchResults from "@/Views/Search/Components/SearchResults/SearchResults.vue";

const routes = [
    {
        path: "/Search",
        name: "SearchForm",
        component: SearchForm,
        props: true,
    },
    {
        path: "/SearchResults",
        name: "SearchResults",
        component: SearchResults,
        props: true,
    },
];

const searchRouter = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes,
});

export default searchRouter;
