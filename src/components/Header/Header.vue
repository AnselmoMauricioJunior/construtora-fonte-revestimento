<template>
  <header>
    <div class="logo">
      <img :src="FRLogo" />
    </div>
  </header>
</template>

<script>
import FRLogo from "../../assets/img/logo1.png";

export default {
  name: 'Header-fr',
  data() {
    return {
      FRLogo: FRLogo,
    };
  },
};
</script>

<style>
@import "./styles.css";
</style>