import { createApp } from "vue";
import App from "./App.vue";
import { setDirectives } from "./day20-directives/index.ts";

// createApp(App).mount("#app");
const app = createApp(App);

setDirectives(app);

app.mount("#app");
