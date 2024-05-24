import { createMemoryHistory, createRouter } from 'vue-router'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import ConfirmTokenCode from '@/views/ConfirmTokenCode.vue'
import Profile from '@/views/Profile.vue'
import VinList from '@/views/VinList.vue'

const routes = [
 
  { path: '/', name:'Login', component: Login },
  { path: '/reg', name:'Register', component: Register },
  { path: '/tokenVerify', name:'ConfirmTokenCode', component: ConfirmTokenCode },
  { path: '/profile', name:'Profile', component: Profile },
  { path: '/vinList', name:'VinList', component: VinList }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})



router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/tokenVerify'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});


export default router;