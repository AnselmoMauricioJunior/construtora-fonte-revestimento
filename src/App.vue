<template>
  <div>
    <Header />
    <Menu />
    <Rodape/>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Menu from "./components/Menu/Menu.vue";
import Rodape from "./components/Rodape/Rodape.vue";

export default {
  name: "App",
  components: {
    Header,
    Menu,
    Rodape,
  }, 
};
</script>

<style>
@import "./styles-geral.css";
</style>
