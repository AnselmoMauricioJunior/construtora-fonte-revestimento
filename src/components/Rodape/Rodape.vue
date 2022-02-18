<template>
  <footer>
      Fonte e Revestimento © | {{anoatual}}
  </footer>
</template>

<script>
export default {
  name: "Rodape-fr",
   data() {
    return {
      anoatual: new Date().getFullYear(),
    };
  },
};
</script>

<style>
@import "./styles.css";
</style>
