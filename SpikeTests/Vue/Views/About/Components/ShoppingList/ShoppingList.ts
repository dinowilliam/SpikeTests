import { defineComponent } from "vue";

export default defineComponent({
  name: "ShoppingList",
  props: {
    header: {
      type: String,
      default:
        "Vue is ready to work on this page with NPM Task Runner and NET 7!",
    },
  },
});
