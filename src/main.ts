import Vue from "vue";
import Router from "vue-router";
import * as Sentry from "@sentry/vue";
import App from "./App.vue";
import router from "./router";

Vue.use(Router);

const app = new Vue({
  router,
  render: (h) => h(App),
});

Sentry.init({
  app,
  dsn: "https://e1342180299b21a6e2f0eb98c81ffd8d@o4509250546692.ingest.de.sentry.io/4509250550104144",
  sendDefaultPii: true,
});

app.$mount("#app");
