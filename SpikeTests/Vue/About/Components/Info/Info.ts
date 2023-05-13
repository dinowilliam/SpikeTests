import { defineComponent } from "vue";
import Vue from "vue";

export default defineComponent({
  name: "Info",
  props: {
    msgAbove: {
      type: String,
      default:
        "Vue.js is an open-source MVVM (Model-View-ViewModel) JavaScript framework for building user interfaces and single-page applications.",
    },
    msgUnder: {
      type: String,
      default: "This website is running Vue " + Vue.version + ".",
    },
  },
});
