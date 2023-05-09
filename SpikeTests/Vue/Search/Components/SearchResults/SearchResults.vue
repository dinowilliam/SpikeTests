<template>
    <div>
        <div v-for="(item, index) in pageOfItems" class="text-start">
            <div class="d-flex text-body-secondary pt-3">
                <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                <p class="pb-3 mb-0 small lh-sm border-bottom">
                <p>{{ item.url }}</p>
                <strong class="d-block text-gray-dark">{{ item.date }}</strong>
                <strong class="d-block text-gray-dark">{{ item.summary }}</strong>
                {{ item.description }}
                </p>
            </div>
        </div>
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                    <a class="page-link" @click="onPageChange(previousPage)">Previous</a>
                </li>
                <li class="page-item" v-for="n of range(starterPageRange, endPageRange)">
                    <a class="page-link" @click="onPageChange(n)">{{ n }}</a>
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
