import Vue from 'vue'
import Router from 'vue-router'
import Vocabulary from '@/components/Vocabulary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vocabulary',
      component: Vocabulary
    }
  ]
})
