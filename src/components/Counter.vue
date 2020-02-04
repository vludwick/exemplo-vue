<template>
    <div class="counter">
        <div class="counter--control">
            <button @click="decrementar">-</button>
            <span>{{contador}}</span>
            <button @click="incrementar">+</button>
        </div>
        <button class="counter--reset" @click="zerar">Zerar contagem</button>
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
.counter {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &--reset {
        margin: 15px 0;
    }
    &--control {
        margin: 15px 0;
        button {
            margin: 0 10px;
        }
    }
}
</style>