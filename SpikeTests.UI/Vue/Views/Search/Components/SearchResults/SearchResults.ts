import { defineComponent } from "vue";
import Page from "@/Views/Search/Components/SearchResults/Page.ts";
import moment from 'moment';

export default defineComponent({
    name: "SearchResults",
    data: function () {
        return {
            pageOfItems: Array<String>,          
            currentPage: Number,
            offset: Number,
            itemsPerPage: 5,
            pagesPagination: Array<Page>,
            isPreviousDisabled: true,
            isNextDisabled: false
        }
    },
    mounted() {        

        try {
            // onSuccess
            console.log(JSON.parse(localStorage.getItem('searchResult')));                        
            console.log(this.responseArray);

            this.pageOfItems = this.responseArray.slice(0, 5);
            this.currentPage = 1;
            this.mountPages();

        } catch (err) {
            // onError
            console.log('Route Param responseArray', err);
        }
    },
    methods: {
        async onPageChange(page: number) {

            this.currentPage = (page * 1);
            this.offset = (page - 1) * this.itemsPerPage + 1 - 1;
            this.pageOfItems = await this.responseArray.slice(
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
        responseArray() {
            return JSON.parse(localStorage.getItem('searchResult'));
        },
        searchOfItems() {
            return this.$route.params.SearchOfItems
        },
        rows() {
            return this.responseArray.length;
        },
        pageQuantity() {
            return Math.ceil(this.responseArray.length / this.itemsPerPage);
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
