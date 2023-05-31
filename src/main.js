import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "@/routes";
import Vuex from "vuex";


createApp(App)
    .use(router)
    .use(vuetify)
    .use(Vuex)
    .mount('#app')
