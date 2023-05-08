import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SearchForm',
    data() {
        return {
            prompt: '',            
            returnIsSucceed : false
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

            fetch("/Search/GetSearchResults", requestOptions)
                .then(response => response.json())
                .then(data => (this.returnIsSucceed = data.result));

        }
    }
    
});
