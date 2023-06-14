<template>
  <div class="container-fluid mt-5">
    <div class="pt-5 pb-5"></div>
    <div class="mt-5" id="logo"><img src="/img/lucene-net-color.png" /></div>
    <form @submit.prevent="sendSearch">
      <div class="input-group pt-5 mb-3">
        <input
          type="text"
          class="form-control"
          id="search"
          name="search"
          placeholder=""
          aria-label=""
          aria-describedby=""
          v-model="prompt"
          required
        />
      </div>
      <button type="submit" class="btn btn-lg btn-dark col-md-4">Search</button>
    </form>
  </div>  
</template>
<style lang="scss" src="./SearchForm.scss"></style>
<script lang="ts" src="./SearchForm.ts"></script>
