<template>
    <div>
        {{this.userList}}
    </div>
</template>
<script>
const axios = require('axios')
export default {
    name: 'Clientes',
    data() {
        return {
            userList: ""
        }
    },
    created() {
        axios.get("./api/users").then().then((response) =>{
            this.userList = response;
        })
    }
}
</script>
<style lang="scss">

</style>