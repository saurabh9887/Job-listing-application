import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "primeicons/primeicons.css";
import router from "./router/index.js";

const app = createApp(App);
app.use(router);

app.mount("#app");
