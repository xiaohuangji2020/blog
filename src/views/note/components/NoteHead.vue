<template>
  <header class="header-fixed" :class="{ transformed, 'transform-revert': !transformed }">
    <router-link :to="{ name: 'index' }" class="logo"></router-link>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class NoteHead extends Vue {
  private transformed = false;
  private mounted() {
    window.addEventListener('scroll', this.handleScroll);
  }
  private beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  private handleScroll(event: Event) {
    const targetEl = event?.target;
    if (!targetEl || !(targetEl instanceof Document)) {
      return;
    }
    const scrollTop = targetEl.documentElement.scrollTop;
    this.transformed = scrollTop > 40;
  }
}
</script>

<style lang="less">
.header-fixed {
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
  display: block;
  width: 100px;
  height: 100%;
  margin: 0 15px;
  background: url('~@/assets/images/logo.png') no-repeat center;
  background-size: contain;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5));
}
.transformed {
  .logo {
    animation: logo-ani 0.5s forwards;
  }
}
.transform-revert {
  .logo {
    animation: logo-ani-revert 0.25s forwards;
  }
}
@keyframes logo-ani {
  to {
    transform: scale(0.8) translate(90vw, -25%);
  }
}
@keyframes logo-ani-revert {
  from {
    transform: scale(0.8) translate(90vw, -25%);
  }
}
</style>
