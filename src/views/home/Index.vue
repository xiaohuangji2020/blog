<template>
  <div class="index">
    <my-nav></my-nav>
    <my-content></my-content>
    <my-footer></my-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyNav from '@/views/common/Nav.vue';
import MyFooter from '@/views/common/Footer.vue';
import MyContent from './HomeContent.vue';

@Component({
  components: {
    MyNav,
    MyContent,
    MyFooter
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
