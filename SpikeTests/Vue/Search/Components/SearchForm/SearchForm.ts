import { defineComponent } from 'vue'
import SearchResults from '@/Search/Components/SearchResults/SearchResults.vue'

export default defineComponent({
    name: 'SearchForm',
    components: { SearchResults },
    data() {
        return {
            prompt: '',
            dataResponse: Array,
            showSearch: true
        }
    },
    methods: {

        sendSearch() {

            var search = {
                Prompt: this.prompt
            };

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(search)
            };

            console.log(prompt);            

            return fetch("https://localhost:44354/Search", requestOptions)
                .then(response => response.json())
                .then(data => (this.dataResponse = data, this.showSearch = false));            
           
        }
    },
    computed: {
        
        showResults() {            
            return !this.showSearch
        }
    }
        
});
