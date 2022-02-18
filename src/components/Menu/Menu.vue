<template>
  <div>
    <nav class="links" :style="'--items:' + menus.length">
      <div v-for="item in menus" :key="item.nome">
        <router-link :to="item.url">{{ item.nome }}</router-link>
      </div>
      <span class="line"></span>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Menu-fr",
  components: {},
  data() {
    return {
      menus: [
        {
          nome: "Home",
          url: "/",
        },
        {
          nome: "Sobre",
          url: "/sobre",
        },
        {
          nome: "Obras",
          url: "/obras",
        },
        {
          nome: "Contato",
          url: "/contato",
        },
      ],
    };
  },
};
</script>

<style>
@import "./styles.css";
</style>
