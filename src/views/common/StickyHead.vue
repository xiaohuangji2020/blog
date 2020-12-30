<template>
  <header class="header-fixed">
    <router-link :to="{ name: 'index' }" class="logo"></router-link>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class StickyHead extends Vue {}
</script>

<style lang="less">
.header-fixed {
  display: flex;
  position: sticky;
  z-index: 10;
  top: 0;
  height: 50px;
  line-height: 50px;
  align-items: center;
  background: rgba(255, 250, 240, 0.95);
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
}

.logo {
  align-self: stretch;
  width: 100px;
  margin: 0 15px;
  background: url('~@/assets/images/logo.png') no-repeat center;
  background-size: contain;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5));
}
</style>
