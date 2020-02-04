<template>
    <section>
        <div>
            <label for="busca">Informe o Id do cliente a ser pesquisado</label>
            <input v-model="id" type="text" id="busca" class="form">
        </div>
        <button @click="pesquisar">Pesquisar</button>
        <div>
            {{this.user}}
        </div>
    </section>
</template>
<script>
const axios = require('axios');
export default {
    name: 'Cliente',
    data() {
        return {
            id: "",
            user: ""
        }
    },
    methods: {
        pesquisar() {
            axios.get("./api/users/" + encodeURIComponent(this.id)).then((response) =>{
                this.user = response;
            })
        }
    }
}
</script>
<style lang="scss">
    .form {
        margin-left: 15px; 
    }
</style>