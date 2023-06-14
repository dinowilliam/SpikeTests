import { createWebHistory, createRouter } from "vue-router";
import SearchForm from "@/Views/Search/Components/SearchForm/SearchForm.vue";
import SearchResults from "@/Views/Search/Components/SearchResults/SearchResults.vue";

const routes = [
    {
        path: "/Search",
        name: "SearchForm",
        component: SearchForm        
    },
    {
        path: "/Search",
        name: "SearchResults",
        component: SearchResults,
        props: true
    }
];

const searchRouter = createRouter({    
    history: createWebHistory(),
    routes,
    mode: 'history'
});

export default searchRouter;
