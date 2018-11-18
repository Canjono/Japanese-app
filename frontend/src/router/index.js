import Vue from 'vue'
import Router from 'vue-router'
import Vocabulary from '@/components/Vocabulary'
import MemoryPalaces from '@/components/MemoryPalaces'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Vocabulary
        },
        {
            path: '/vocabulary',
            component: Vocabulary
        },
        {
            path: '/memory-palaces',
            component: MemoryPalaces
        }
    ]
})
