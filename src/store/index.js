
import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        userInfo:{},
        spongeBobs:['patrickStar','squarePants','squidwardTentacles','crabBoss'],
        family:[
            {name:"patrickStar",family:"squarePants",age:18,habits:"squarePants"},
            {name:"squarePants",family:"squarePants",age:12,habits:"smile"},
            {name:"squidwardTentacles",family:"squarePants",age:18,habits:"steal something from squarePants"},
            {name:"crabBoss",family:"squarePants",age:40,habits:"make money, plent of money"},
        ]
    },
    getters:{
        isLogin:state => {
            return state.userInfo != '';
        },
        isSquareFamily:state => {
            return state.family.filter(user => {
                return user.family == "squarePants"
            })
        }
    },
    mutations:{
        setUserInfo(info){
            if(info){
                state.userInfo = info;
            }
        }
    },
    actions:{},
})