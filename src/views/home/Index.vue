<template>
  <div class="index">
    <my-nav></my-nav>
    <my-content></my-content>
    <my-footer></my-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import myNav from '@/views/common/Nav.vue';
import myFooter from '@/views/common/Footer.vue';
import myContent from './HomeContent.vue';

@Component({
  components: {
    myNav,
    myContent,
    myFooter
  }
})
export default class Index extends Vue {}
</script>

<style lang="less" scoped>
.index {
  min-height: 100vh;
  margin: 0 auto;
}
</style>
