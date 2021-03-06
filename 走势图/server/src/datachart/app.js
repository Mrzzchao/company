import Vue from 'vue';
import App from './views/App.vue';
import store from './store';
import router from './router';
import { sync } from 'vuex-router-sync';
import vueTap from 'v-tap';

Vue.use(vueTap);

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
const app = new Vue({
    router,
    store,
    ...App // Object spread copying everything from App.vue
});

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { app, router, store };
