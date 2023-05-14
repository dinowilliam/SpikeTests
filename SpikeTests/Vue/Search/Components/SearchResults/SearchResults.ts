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
            currentPage: Number,
            offset: Number,
            itemsPerPage: 6,
            pagesPagination: Array<Page>,
            pageOfItems: this.response.slice(0, 6)
        };
    }, 
    methods: {
        async onPageChange(page: number) {

            this.currentPage = (page * 1);
            this.offset = (page - 1) * this.itemsPerPage + 1 - 1;
            this.pageOfItems = await this.response.slice(
                this.offset,
                this.offset + this.itemsPerPage
            );

            this.mountPages();
        },
        mountPages() {
            this.pagesPagination = new Array<Page>();

            for (let i = this.startPageRange; i <= this.endPageRange; i += 1) {
                let page = new Page();
                page.pageNumber = i
                this.pagesPagination.push(page);
            }
        }
    },
    computed: {
        rows() {
            return this.response.length;
        },
        pages() {
            this.mountPages();
            return this.pagesPagination;
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
                : this.pageQuantity;
        },
        startPageRange: function () {
            let startRange: number;

            startRange = this.currentPage <= 21 ? 1 : this.currentPage - 20;

            return startRange;
        },
        endPageRange: function () {
            let endRange: number;

            endRange = this.currentPage + 21 >= this.pageQuantity ? this.pageQuantity : this.currentPage + 20;

            return endRange
        }
    },
    mounted() {
        this.currentPage = 1;
    }
});
