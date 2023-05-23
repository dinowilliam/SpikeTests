import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SearchForm',    
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

            fetch("https://localhost:44354/Search", requestOptions)
                .then(response => response.json())
                .then(data => (this.dataResponse = data));

            return this.$router.push({ name: 'SearchResults', params: { response: JSON.stringify([this.dataResponse]) } });
        }
    },
    computed: {
        
        showResults() {            
            return !this.showSearch
        }
    }
        
});
