<template>
    <div>
        <button @click="decrementar">-</button>
        <span>{{contador}}</span>
        <button @click="incrementar">+</button>
        <button @click="zerar">Zerar contagem</button>
    </div>
</template>
<script>
export default {
    name: 'counter',
    computed: {
        contador () {
            return this.$store.state.count;
        }
    },
    methods: {
        incrementar () {
            this.$store.commit('incrementar');
        },
        decrementar () {
            this.$store.commit('decrementar');
        },
        zerar () {
            this.$store.commit('zerar');
        }
    }
}
</script>
<style lang="scss">

</style>