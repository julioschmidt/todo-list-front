import LandingPage from './components/marketing/LandingPage.vue'
import App from './App.vue'
import About from './components/marketing/AboutPage.vue'
import Login from './components/authorization/Login.vue'
import Logout from './components/authorization/Logout.vue'
import Register from './components/authorization/Register.vue'
import TestTodosVariable from './components/tests/TestTodosVariable.vue'

const routes = [
    { path: '/', name: 'home', component: LandingPage },
    { path: '/todo', name: 'app', component: App, meta: { requiresAuth: true, } },
    { path: '/about', name: 'about', component: About },
    { path: '/login', name: 'login', component: Login, props: true, meta: { requiresVisitor: true, } },
    { path: '/logout', name: 'logout', component: Logout },
    { path: '/register', name: 'register', component: Register, meta: { requiresVisitor: true, } },
    { path: '/todos/:id', name: 'testTodosVariable', component: TestTodosVariable },
]

export default routes
