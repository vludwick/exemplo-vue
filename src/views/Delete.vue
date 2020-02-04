<template>
    <section>
        <div>
            <label for="">Informe o Id a ser excluido:</label>
            <input type="text" v-model="id">
        </div>
        <button @click="deletar">Deletar</button>
        <div>
            {{this.response}}
        </div>
    </section>
</template>
<script>
const axios = require('axios');
export default {
    name: 'Delete',
    data() {
        return {
            id: "",
            response: ""
        }
    },
    methods: {
        deletar() {
            axios.delete('./api/users/' + encodeURIComponent(this.id)).then((response)=> {
                this.response = response;
            })
        }
    }
}
</script>
<style lang="scss">

</style>