<template>
    <section>
        <h1>Selecione a função que deseja acessar:</h1>
        <router-link class="link" :to="{name: 'Cliente'}">Get cliente</router-link>
        <router-link class="link" :to="{name: 'Clientes'}">Get clientes</router-link>
        <router-link class="link" :to="{name: 'Post'}">Post cliente</router-link>
        <router-link class="link" :to="{name: 'Update'}">Put cliente</router-link>
        <router-link class="link" :to="{name: 'Delete'}">Delete cliente</router-link>
    </section>
</template>
<script>
export default {
  name: 'Home',
  components: {

  }
}
</script>
<style lang="scss">
.link {
  // display: block;
  margin-right: 15px;
  background-color: #aaa;
  border-radius: 15px;
  padding: 10px 15px;
  width: 320px;
  text-decoration: none;
  color: #000;
  &:hover {
    background-color: #888;
  }
}
</style>