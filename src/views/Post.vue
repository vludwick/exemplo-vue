<template>
    <div>
                <div>
            <label for="">nome:</label>
            <input type="text" v-model="nome">
        </div>
        <div>
            <label for="">Data de nascimento:</label>
            <input type="text" v-model="dataNasc">
        </div>
        <div>
            <label for="">cpf:</label>
            <input type="text" v-model="cpf">
        </div>
        <div>
            <label for="">endereço:</label>
            <input type="text" v-model="endereco">
        </div>
        <div>
            <label for="">e-mail:</label>
            <input type="text" v-model="email">
        </div>
        <div>
            <label for="">cep:</label>
            <input type="text" v-model="cep">
        </div>
        <div>
            <label for="">cidade:</label>
            <input type="text" v-model="cidade">
        </div>
        <div>
            <label for="">estado:</label>
            <input type="text" v-model="estado">
        </div>
        <div>
            <label for="">senha:</label>
            <input type="text" v-model="senha">
        </div>
        <button @click="criar">Criar</button>
        <div>
            {{this.response}}
        </div>
    </div>
</template>
<script>
const axios = require('axios');
export default {
    name: 'Post',
    data() {
        return {
            id: "",
            nome: "",
            dataNasc: "",
            cpf: "",
            endereco: "",
            email: "",
            cep: "",
            cidade: "",
            estado: "",
            senha: "",
            response: ""
        }
    },
    methods: {
        criar() {
            let data = {
                idUser: this.id,
                nameUser: this.nome,
                birthdateUser: this.dataNasc,
                cpfUser: this.cpf,
                addressUser: this.endereco,
                mailUser: this.email,
                cepUser: this.cep,
                cityUser: this.cidade,
                stateUser: this.estado,
                passwordUser: this.senha
            }
            axios.post('./api/users', JSON.stringify(data)).then((response) => {
                this.response = response;
            })
        }
    }
}
</script>>
<style lang="scss">

</style>