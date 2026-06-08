import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { setDirectives } from "./day20-directives/index.ts";
import "../day25-request-wrapper-demo/src/main";

// createApp(App).mount("#app");
const app = createApp(App);

app.use(createPinia());
setDirectives(app);
app.use(router);

app.mount("#app");
