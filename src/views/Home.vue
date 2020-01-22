<template>
    <section>
        <counter/>
        <router-link :to="{name: 'resultado'}">Ver o resultado</router-link>
    </section>
</template>
<script>
import counter from '../components/Counter.vue'

export default {
  name: 'Home',
  components: {
    counter
  }
}
</script>
<style lang="scss">

</style>