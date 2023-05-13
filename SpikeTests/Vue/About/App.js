import { __decorate } from "tslib";
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
let App = class App extends Vue {};
App = __decorate(
  [
    Options({
      components: {
        HelloWorld,
      },
    }),
  ],
  App
);
export default App;
//# sourceMappingURL=App.js.map
