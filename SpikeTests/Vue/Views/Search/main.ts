import { createApp } from "vue";
import appSearch from "./App.vue";
import searchRouter from '@/Routes/SearchRouter.ts'

createApp(appSearch).use(searchRouter).mount("#mainAppSearch");
