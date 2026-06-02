import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { setDirectives } from "./day20-directives/index.ts";

// createApp(App).mount("#app");
const app = createApp(App);

setDirectives(app);
app.use(router);

app.mount("#app");
