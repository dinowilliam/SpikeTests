import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SearchForm',
    data() {
        return {
            prompt: '',
            data_response: Array,
            showSearch: true
        }
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

            this.data_response = await fetch("https://localhost:44354/Search", requestOptions)
                .then(response => response.json())
                .then((data) => { return data });
             
            return this.$router.push({
                name: 'SearchResults',
                props: {
                    test_data : 'Worked',
                    response_array: this.data_response
                }
            });
        }
    },
    computed: {

        showResults() {
            return !this.showSearch
        }
    }

});
