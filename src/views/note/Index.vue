<template>
  <div>
    <sticky-head></sticky-head>
    <router-view class="wrapper"></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StickyHead from '@/views/common/StickyHead.vue';
import MyFooter from '@/views/common/Footer.vue';
@Component({
  components: {
    StickyHead,
    MyFooter
  }
})
export default class NoteIndex extends Vue {}
</script>

<style lang="less" scoped>
.wrapper {
  max-width: 1024px;
  margin: 30px auto;
  padding: 10px;
}
</style>
