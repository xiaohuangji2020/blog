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
import myContent from './Content1.vue';
import myFooter from '@/views/common/Footer.vue';

@Component({
  components: {
    myNav,
    myContent,
    myFooter
  }
})
export default class Index extends Vue {
  private navList: string[] = ['首页', '技术', '简历', '关于'];
}
</script>

<style lang="less" scoped>
.index {
  min-height: 100vh;
  margin: 0 auto;
}
</style>
