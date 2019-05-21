import Vue from 'vue'
import Router from 'vue-router'
import index from '@pages/index'
import detail from '@pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: index,
      children:[
        {
          path:'detail',
          name:'detail',
          component:detail
        }
      ]
    }
  ]
})
