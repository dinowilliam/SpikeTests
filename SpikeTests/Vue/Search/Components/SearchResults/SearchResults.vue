<template>
    <div>
        <div v-for="(item, index) in pageOfItems" class="text-start">
            <div class="d-flex text-body-secondary pt-3">
                <span class="me-1"><img src=" https://www.dinowilliam.com/lib/assets/logo.png" height="16" width="72" loading="lazy"></span>
                <p class="pb-3 mb-0 small lh-sm">
                <p class="h6">{{ item.url }} <span class="badge rounded-pill text-bg-secondary">{{ formatDate(item.date) }}</span></p>
                <p><a class="h5" v-bind:href="item.url">{{ item.title }}</a></p>
                {{ item.description }}
                </p>                
            </div>
        </div>
        <nav class="pt-5" aria-label="Search Page navigation">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <a class="page-link" :class="{ disabled: isPreviousDisabled }" @click="onPageChange(previousPage)">Previous</a>
                </li>
                <li class="page-item" :class="{ active: page.isActive }" v-for="page in pagesPagination">
                    <a class="page-link" @click="onPageChange(page.pageNumber)">{{ page.pageNumber }}</a>
                </li>
                <li class="page-item">
                    <a class="page-link" :class="{ disabled: isNextDisabled }" @click="onPageChange(nextPage)">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<style lang="scss" src="./SearchResults.scss"></style>
<script lang="ts" src="./SearchResults.ts"></script>
