import { __decorate } from "tslib";
import { Options, Vue } from "vue-class-component";
let HelloWorld = class HelloWorld extends Vue {
  msg;
};
HelloWorld = __decorate(
  [
    Options({
      props: {
        msg: String,
      },
    }),
  ],
  HelloWorld
);
export default HelloWorld;
//# sourceMappingURL=HelloWorld.js.map
