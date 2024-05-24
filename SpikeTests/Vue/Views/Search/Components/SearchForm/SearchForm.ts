import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SearchForm',
    data() {
        return {
            dataResponse: { type: Array },
            prompt: { type: String, default: '' }            
        }
    },
    mounted() {
        this.prompt = '';
    },
    methods: {

        async sendSearch() {

            var search = {
                Prompt: this.prompt
            };

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(search)
            };

            console.log(prompt);

            this.dataResponse = await fetch("https://localhost:44354/Search", requestOptions)
                .then(response => response.json())
                .then((data) => { return data });

            localStorage.clear();

            localStorage.setItem('searchResult', JSON.stringify(this.dataResponse));

            console.log(this.dataResponse);

            this.$router.push({
                name: 'SearchResults'
            });
        }
    }

});
