<template>
    <div class="content">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <router-view />
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
