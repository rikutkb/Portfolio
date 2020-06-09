import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/templates/Top.vue'
import Works from '@/components/templates/Works.vue'
import Profile from '@/components/templates/Profile.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/Works',
      name: 'Works',
      component: Works
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
