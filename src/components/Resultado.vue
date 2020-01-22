<template>
    <div>
        <p>Você clicou {{this.contagem}} vezes no botão</p>
        <button @click="zerar">Zerar contagem</button>
        <router-link :to="{name: 'home'}">Retornar para a home</router-link>
    </div>
</template>
<script>
export default {
    name: 'resultado',
    computed: {
        contagem() {
            return this.$store.state.count
        } 
    },
    methods: {
        zerar () {
            this.$store.commit('zerar');
        }
    }
}
</script>
<style lang="scss">

</style>