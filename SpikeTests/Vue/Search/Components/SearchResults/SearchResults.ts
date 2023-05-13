import { defineComponent } from "vue";
import Page from "@/Search/Components/SearchResults/Page.ts";

export default defineComponent({
    name: "SearchResults",
    props: {
        response: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            offset: Number,
            currentPage: Number,
            itemsPerPage: 6,
            pageOfItems: this.response.slice(0, 6)
        };
    },
    methods: {
        async onPageChange(page: number) {

            this.currentPage = page;
            this.offset = (page - 1) * this.itemsPerPage + 1 - 1;
            this.pageOfItems = await this.response.slice(
                this.offset,
                this.offset + this.itemsPerPage
            );
            console.log("Internal Page: " + page);
            console.log("Current Page: " + this.currentPage);
        }       
    },
    computed: {
        rows() {
            return this.response.length;
        },
        pages() {
            let pages: Array<Page>;            
            
            pages = new Array<Page>();
            
            for (let i = this.startPageRange; i <= this.endPageRange; i += 1) {
                let page = new Page();
                page.pageNumber = i
                pages.push(page);
            }

            return pages;
        },
        pageQuantity() {
            return Math.ceil(this.response.length / this.itemsPerPage);
        },
        previousPage() {
            return this.currentPage > 1 ? this.currentPage - 1 : 1;
        },
        nextPage() {
            return this.currentPage < this.pageQuantity
                ? this.currentPage + 1
                : this.pageQuantity();
        },
        startPageRange: function () {
            let startRange: number;

            if ((this.currentPage = 1)) {
                startRange = 1;
            }
            if (this.currentPage > 1) {
                startRange = this.currentPage + 1;
            }

            return startRange;
        },
        endPageRange: function () {
            return this.startPageRange + 40;
        }
    }
});
