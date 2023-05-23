import { defineComponent } from "vue";
import Page from "@/Search/Components/SearchResults/Page.ts";
import moment from 'moment';

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
            itemsPerPage: 5,
            pagesPagination: Array<Page>,
            pageOfItems: this.response.slice(0, 5),
            isPreviousDisabled: true,
            isNextDisabled: false
        };
    },
    mounted() {
        this.currentPage = 1;
        this.mountPages();
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

            let startRange = this.currentPage <= 21 ? 1 : this.currentPage - 20;
                startRange = startRange + 41 >= this.pageQuantity ? this.pageQuantity - 39 : startRange;

            let endRange = startRange + 41 >= this.pageQuantity ? this.pageQuantity : startRange + 39;

            for (let i = startRange; i <= endRange; i += 1) {
                let page = new Page();
                page.pageNumber = i
                page.isActive = this.currentPage == i ? true : false;
                this.pagesPagination.push(page);
            }

            this.isPreviousDisabled = this.currentPage == 1 ? true : false;
            this.isNextDisabled = this.currentPage == this.pageQuantity ? true : false;
        },
        redirect(url: string) {
            window.location.href = url;
        }
        ,
        formatDate(value) {
            return moment(value).format('YYYY-MM-DD hh:mm:ss');
        }
    },
    computed: {
        rows() {
            return this.response.length;
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
    }    
});
