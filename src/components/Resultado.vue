<template>
    <div>
        <p>Você clicou {{this.contagem}} vezes no botão</p>
        <button @click="zerar">Zerar contagem</button>
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