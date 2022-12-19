import { createApp } from 'vue'
import Master from './components/layouts/Master.vue'
import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'
import routes from './routes'
import { store } from './store/store.js'
import mitt from 'mitt';


const router = createRouter({
    history: createWebHistory(),
    routes, //routes: routes
})

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !store.getters.loggedIn) {
      return {
        name: 'login',
      }
    }
    else if (to.matched.some(record => record.meta.requiresVisitor) && store.getters.loggedIn) {
        return {
          name: 'app',
        }
      }

  })

const app = createApp(Master);
const emitter = mitt();
app.config.globalProperties.emitter = emitter;



app.use(router)
app.use(store)
app.mount('#app');

