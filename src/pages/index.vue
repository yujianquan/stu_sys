<template>
    <div class="content">
        <div class="head">
            <v-head></v-head>
        </div>
        <div class="sidebar">
            <v-sidebar></v-sidebar>
        </div>
        <div class="content-body">
            <router-view />
        </div>
    </div>
</template>
<script>
import VHead from "@components/head"
import VSidebar from "@components/sidebar"
export default {
    name:"index",
    components:{
        VHead,VSidebar
    }
}
</script>
<style lang="scss">
@import "src/assets/main.scss";

.content{
    $headHeight:50px !global;
    $sideWidth:200px !global;
    $borderWidth:1px !global;

    width:100%;
    height:100%;
    overflow-y: hidden;
}
.sidebar{
    width:$sideWidth;
    height:calc(100% - #{$headHeight});
    border-right: 1px solid #eee;
    display: inline-block;
    overflow: hidden;
}
.content-body{
    width: calc(100% - #{$sideWidth + $borderWidth});
    height:calc(100% - #{$headHeight});
    display: inline-block;
    float: right;
}
.head{
    height: $headHeight;
    width:100%;
    position: relative;
    z-index: 2;
    box-shadow: 1px 1px 5px #eee;
}
</style>

