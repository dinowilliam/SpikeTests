<template>
    <div>
        <div v-for="(item, index) in pageOfItems" class="text-start">
            <div class="d-flex text-body-secondary pt-3">
                <span class="me-1"><img src=" https://www.dinowilliam.com/lib/assets/logo.png" height="16" width="72" loading="lazy"></span>
                <p class="pb-3 mb-0 small lh-sm border-bottom">
                <p class="h6">{{ item.url }} </p>
                <p><a class="h4" v-bind:href="item.url">{{ item.title }}</a></p>
                {{ item.description }}
                </p>
            </div>
        </div>
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                    <a class="page-link" @click="onPageChange(previousPage)">Previous</a>
                </li>
                <li class="page-item" v-for="page in pagesPagination">
                    <a class="page-link" @click="onPageChange(page.pageNumber)">{{ page.pageNumber }}</a>
                </li>
                <li class="page-item">
                    <a class="page-link" @click="onPageChange(nextPage)">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<style lang="scss" src="./SearchResults.scss"></style>
<script lang="ts" src="./SearchResults.ts"></script>
