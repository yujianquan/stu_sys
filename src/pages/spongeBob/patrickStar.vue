<template>
    <div class="patrickStar">
        <table class="table">
            <thead>
                <th>Name</th>
                <th>Age</th>
                <th>Habits</th>
            </thead>
            <tbody>
                <tr v-for="item in family" :key="item.name">
                    <td>{{item.name}}</td>
                    <td>{{item.age}}</td>
                    <td>{{item.habits}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            family:[],
        }
    },
    created(){
        this.axios.post("/api/users/userinfo")
        .then((response) => {
            console.log(response)
        }).catch((error) => {
            console.error(error)
        })
        this.family = this.$store.getters.isSquareFamily;
    }
}
</script>

