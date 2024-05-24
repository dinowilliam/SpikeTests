import { createApp } from "vue";
import vueLocalStorage from 'vue-local-storage';
import searchRouter  from '@/Routes';
import appSearch from "./App.vue";

const app = createApp(appSearch);
app.mixin(vueLocalStorage);
app.use(searchRouter);
app.mount("#mainAppSearch");
