import { createApp } from "vue";
import searchRouter  from '@/Routes/SearchRouter.ts';
import appSearch from "./App.vue";


const app = createApp(appSearch);
app.use(searchRouter);
app.mount("#mainAppSearch");
