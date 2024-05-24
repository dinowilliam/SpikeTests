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
        path: "/SearchResults",
        name: "SearchResults",
        component: SearchResults
    }
];

const searchRouter = createRouter({    
    //history: createWebHistory(import.meta.env.BASE_URL), 
    history: createWebHistory(), 
    routes: routes    
});

export default searchRouter;
