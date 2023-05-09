import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SearchResults',
    props: { response: Array },
    data() {
        return {
            offset: Number,
            currentPage: 1,
            itemsPerPage: 7,
            pageOfItems: this.response.slice(0, 7)
        }
    },
    methods: {
        async onPageChange(page) {
            if (page != 1) { this.currentPage = page; }
            this.offset = ((page - 1) * this.itemsPerPage + 1) - 1;
            this.pageOfItems = await this.response.slice(this.offset, (this.offset + this.itemsPerPage));
        },
        *range(start, end, step = 1) {
            for(let i = start; i <= end; i += step) {
                yield i
            }
        }   
    },
    computed: {
        pageQuantity() {
            return Math.ceil((this.response.length / this.itemsPerPage));
        },
        previousPage() {
            return this.currentPage > 1 ? this.currentPage -1 : 1 ;
        },
        nextPage() {
            return this.currentPage < this.pageQuantity ? this.currentPage + 1 : this.pageQuantity();
        },
        startPageRange() {
            let startRange: Number;

            if (this.currentPage = 1) { startRange = 1 }

            return startRange;
        },
        endPageRange() {
            let endRange: Number;

            if (this.currentPage <= this.pageQuantity) { endRange = this.currentPage + 40 }

            return endRange;
        }
    }
});
