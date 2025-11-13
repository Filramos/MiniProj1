import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "popper.js";
import "bootstrap/dist/js/bootstrap";

createApp(App).use(router).mount("#app");
