import { createApp } from "vue";
import "./style.css";
import router from "./router";
import i18n from "./i18n";
import App from "./App.vue";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();
const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount("#app");
