import index from '@pages/index'
import spongeBob from '@pages/spongeBob'
import patrickStar from '@pages/spongeBob/patrickStar.vue'
import squarePants from '@pages/spongeBob/squarePants.vue'
import squidwardTentacles from '@pages/spongeBob/squidwardTentacles.vue'
import crabBoss from '@pages/spongeBob/crabBoss.vue'
import fullOfJoy from '@pages/fullOfJoy'
import hututu from '@pages/fullOfJoy/hututu.vue'
import zhangxiaoli from '@pages/fullOfJoy/zhangxiaoli.vue'
import huyingjun from '@pages/fullOfJoy/huyingjun.vue'

const routes = [
    {
        path: '/',
        name: 'main',
        component: index,
        children:[
          {
            path:'/spongeBob',
            name:'spongeBob',
            component:spongeBob
          },
          {
            path:'/spongeBob/patrickStar',
            name:'patrickStar',
            component:patrickStar
          },
          {
            path:'/spongeBob/squarePants',
            name:'squarePants',
            component:squarePants
          },
          {
            path:'/spongeBob/squidwardTentacles',
            name:'squidwardTentacles',
            component:squidwardTentacles
          },
          {
            path:'/spongeBob/crabBoss',
            name:'crabBoss',
            component:crabBoss
          },
          {
            path:'/fullOfJoy',
            name:'fullOfJoy',
            component:fullOfJoy
          },
          {
            path:'/fullOfJoy/hututu',
            name:'hututu',
            component:hututu
          },
          {
            path:'/fullOfJoy/zhangxiaoli',
            name:'zhangxiaoli',
            component:zhangxiaoli
          },
          {
            path:'/fullOfJoy/huyingjun',
            name:'huyingjun',
            component:huyingjun
          },
        ]
    }
]

export default routes