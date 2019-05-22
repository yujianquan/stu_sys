<template>
    <div class="side_ul">
        <ul>
            <li v-for="list in ulList" :key="list.id">
                <div :class="['sigle_ul',firstUl == list.url ? 'active' : '']" @click="hrefTo(list.url)">{{list.name}}</div>
                <transition name="trans_ul">
                    <ul>
                        <li v-for="item in list.child" :key="item.id" :class="{active:secondUl == item.url}">
                            <a :href="item.url" @click.prevent.stop="hrefTo(item.url)">{{item.name}}</a>
                        </li>
                    </ul>
                </transition>
            </li>
        </ul>
    </div>
</template>
<script>
import router from '@/router'
export default {
    name:"vsidebar",
    data(){
        return {
            ulList:[
                {
                    id:1,
                    name:"海绵宝宝",
                    url:'/spongeBob',
                    child:[
                        {name:"海绵宝宝",id:2,url:'/spongeBob/squarePants'},
                        {name:"派大星",id:3,url:'/spongeBob/patrickStar'},
                        {name:"章鱼哥",id:4,url:'/spongeBob/squidwardTentacles'},
                        {name:"蟹老板",id:5,url:'/spongeBob/crabBoss'},
                    ]
                },
                {
                    id:6,
                    name:"大耳朵图图",
                    url:'/fullOfJoy',
                    child:[
                        {id:7,name:"胡图图",url:'/fullOfJoy/hututu'},
                        {id:8,name:"张小丽",url:'/fullOfJoy/zhangxiaoli'},
                        {id:9,name:"胡英俊",url:'/fullOfJoy/huyingjun'},
                    ]
                },
            ],
            firstUl:"",
            secondUl:"",
        }
    },
    methods:{
        getDefaultActive(){
            let {path} = this.$route;
            let array = path.split("/");
            this.firstUl = "/" + array[1];
            if(array.length > 2){
                this.secondUl = this.firstUl + "/" + array[2];
            }
        },
        hrefTo(url){
            router.push(url);
            this.getDefaultActive();
        }
    },
    created:function(){
        this.getDefaultActive();
    }
}
</script>
<style lang="scss" scoped>
ul{
    margin: 0;
    padding: 0;
    list-style: none;
    cursor: pointer;
    a{
        color: black;
        text-decoration: none
    }
}
.sigle_ul, .sigle_ul + ul li{
    padding:10px 20px;
}
.sigle_ul + ul{
    height:auto;
    overflow: hidden;
    li{
        height: 0px;
        padding: 0px!important;

        a{
            padding: 10px 20px 10px 50px;
            display: inline-block;
            width: 100%;
            box-sizing: border-box;
        }
    }
}
.sigle_ul.active + ul > li{
    height:41px;
    transition: height .4s;
}
</style>


